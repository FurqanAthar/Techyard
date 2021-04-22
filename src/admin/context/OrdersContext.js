import React from 'react'
import {firestore} from '../../firebase'
import {getDataOfID, validateStockWithColor, validateStockWithoutColor} from '../../utilityFunctions/adminUtils'
import {addMobileContext} from '../context/AddMobileContext'
import {addPowerbankContext} from '../context/AddPowerbankContext'
import {addHeadphoneContext} from '../context/AddHeadphoneContext'

export const orderContext = React.createContext()

export default function OrderContextProvider({children}) {
    const [validatedOrders, setValidatedOrders] = React.useState([])
    const [deliveredOrders, setDeliveredOrders] = React.useState([])
    const {headphoneData} = React.useContext(addHeadphoneContext)
    const {powerbankData} = React.useContext(addPowerbankContext)
    const {mobileData} = React.useContext(addMobileContext)
    const [orderData, setOrderData] = React.useState([])
    const [newOrders, setNewOrders] = React.useState([])
    const [success, setSuccess] = React.useState("")
    let dataToUpdate = {
        mobiles: [],
        headphones: [],
        powerbanks: [],
    }
    React.useEffect(()=>{
        loadOrders()
    }, [])

    const loadOrders = () => {
        console.log('loadorders')
        firestore.collection('orders').get().then(data => {
            let dataArray = []
            let newDataArray = []
            let validatedDataArray = []
            let deliveredDataArray = []
            data.forEach(doc => {
                var obj = {
                    id : doc.id,
                    ...doc.data()
                }
                dataArray.push(obj)
                if (obj.status === `new`) {
                    newDataArray.push(obj)
                }
                else if (obj.status === `validated`) {
                    validatedDataArray.push(obj)
                }
                else if (obj.status === `delivered`) {
                    deliveredDataArray.push(obj)
                }
            })
            setOrderData([...dataArray])
            setNewOrders([...newDataArray])
            setValidatedOrders([...validatedDataArray])
            setDeliveredOrders([...deliveredDataArray])
        })
    }

    const validate = (id) => {
        let tempData = {}
        dataToUpdate = {
            mobiles: [],
            headphones: [],
            powerbanks: [],
        }
        firestore.collection('orders').doc(id).get().then((doc) => {
            tempData = {...doc.data()}
            validationHelper(doc.data()).then((data) => {
                updateFirebase(data.dataToUpdate, id)
            })
        })
    }

    const validationHelper = (doc) => {
        return new Promise((resolve, reject) => {
            doc.data.forEach((item) => {
                if (item.which === `mobile`) {
                    let matchedId =  getDataOfID(item.id, mobileData)
                    let r =  validateStockWithColor(item, matchedId)
                    let obj = {
                        productId: matchedId.id,
                        deliveredAmount: r[0],
                        color: item.color,
                        return: r[1],
                        updatedProduct: r[2]
                    }
                    dataToUpdate.mobiles.push(obj)
                }
                else if (item.which === `headphone`) {
                    let matchedId =  getDataOfID(item.id, headphoneData)
                    let r =  validateStockWithoutColor(item, matchedId)
                    let obj = {
                        productId: matchedId.id,
                        deliveredAmount: r[0],
                        return: r[1],
                        updatedProduct: r[2]
                    }
                    dataToUpdate.headphones.push(obj)
                }
                else if (item.which === `powerbank`) {
                    let matchedId =  getDataOfID(item.id, powerbankData)
                    let r =  validateStockWithoutColor(item, matchedId)
                    let obj = {
                        productId: matchedId.id,
                        return: r[1],
                        deliveredAmount: r[0],
                        updatedProduct: r[2]
                    }
                    dataToUpdate.powerbanks.push(obj)
                }
            })
            resolve({dataToUpdate})
        })
    }

    const updateFirebase = async (update, orderId) => {
        await firestore.collection('orders').get().then(data => {
            data.forEach(doc => {
                if (doc.id === orderId) {
                    updateMobiles(update.mobiles, orderId, doc.data())
                    .then(async () => {
                        await firestore.collection('orders').get().then(data2 => {
                            data2.forEach(doc2 => {
                                if (doc2.id === orderId) {
                                    updateHeadphones(update.headphones, orderId, doc2.data()).then(async () => {
                                        await firestore.collection('orders').get().then(data3 => {
                                            data3.forEach(doc3 => {
                                                if (doc3.id === orderId) {
                                                    updatePowerbanks(update.powerbanks, orderId, doc3.data()).then(async () => {
                                                        await firestore.collection('orders').doc(orderId).update({
                                                            status: `validated`
                                                        }).then(() => {
                                                            loadOrders()
                                                            setSuccess("Order Validated")
                                                            setTimeout(() => {
                                                                setSuccess("")
                                                            }, 3000)
                                                        })
                                                    })
                                                }
                                            })
                                        })
                                    })
                                }
                            })
                        })
                    })
                }
            })
        })
    }

    const updateMobiles = (mobilesUpdate, orderId, orderData) => {
        let tempData = {}
        return new Promise((resolve, reject) => {
            let promise = new Promise ((resolve2, reject2) => {
                let count = 0
                mobilesUpdate.forEach(async item => {
                    await firestore.collection('mobiles').doc(item.productId).update({
                        ...item.updatedProduct
                    }).then(() => {
                        tempData = orderData.data
                        tempData.forEach((item2, index2) => {
                            let obj = {...item2}
                            if (item2.id === item.productId && item2.color === item.color) {
                                obj = {
                                    ...item2,
                                    deliveredAmount: item.deliveredAmount,
                                    returnedAmount: item.return
                                }
                                orderData.data[index2] = obj
                            }
                        })
                    count++;
                    }).then(() => {
                        if (count === mobilesUpdate.length) {
                            resolve2()
                        }
                    })
                })
                if (mobilesUpdate.length === 0) {
                    resolve2()
                }
            })
            promise.then(() => {
                firestore.collection('orders').doc(orderId).set({...orderData}).then(() => {
                    resolve()
                })
            })
        })
    }

    const updateHeadphones = (headphonesUpdate, orderId, orderData) => {
        let tempData = {}
        return new Promise((resolve, reject) => {
            let promise = new Promise ((resolve2, reject2) => {
                let count = 0
                headphonesUpdate.forEach(async item => {
                    await firestore.collection('headphones').doc(item.productId).update({
                        ...item.updatedProduct
                    }).then(() => {
                        tempData = orderData.data
                        tempData.forEach((item2, index2) => {
                            let obj = {...item2}
                            if (item2.id === item.productId) {
                                obj = {
                                    ...item2,
                                    deliveredAmount: item.deliveredAmount,
                                    returnedAmount: item.return
                                }
                                orderData.data[index2] = obj
                            }
                        })
                    count++;
                    }).then(() => {
                        if (count === headphonesUpdate.length) {
                            resolve2()
                        }
                    })
                })
                if (headphonesUpdate.length === 0) {
                    resolve2()
                }
            })
            promise.then(() => {
                firestore.collection('orders').doc(orderId).set({...orderData}).then(() => {
                    resolve()
                })
            })
        })
    }

    const updatePowerbanks = (powerbanksUpdate, orderId, orderData) => {
        let tempData = {}
        return new Promise((resolve, reject) => {
            let promise = new Promise ((resolve2, reject2) => {
                let count = 0
                powerbanksUpdate.forEach(async item => {
                    await firestore.collection('powerbanks').doc(item.productId).update({
                        ...item.updatedProduct
                    }).then(() => {
                        tempData = orderData.data
                        tempData.forEach((item2, index2) => {
                            let obj = {...item2}
                            if (item2.id === item.productId) {
                                obj = {
                                    ...item2,
                                    deliveredAmount: item.deliveredAmount,
                                    returnedAmount: item.return
                                }
                                orderData.data[index2] = obj
                            }
                        })
                    count++;
                    }).then(() => {
                        if (count === powerbanksUpdate.length) {
                            resolve2()
                        }
                    })
                })
                if (powerbanksUpdate.length === 0) {
                    resolve2()
                }
            })
            promise.then(() => {
                firestore.collection('orders').doc(orderId).set({...orderData}).then(() => {
                    resolve()
                })
            })
        })
    }

    const deliver = async (id) => {
        await firestore.collection('orders').doc(id).update({status: `delivered`}).then(() => {
            loadOrders()
            setSuccess('Delivered')
            setTimeout(() => {
                setSuccess("")
            }, 3000)
        })
    }

    const orderOfID = (id) => {
        let data = []
        orderData.forEach(item => {
            if (item.userId === id) {
                data.push({...item})
            }
        })
        return data
    }

    return (
        <orderContext.Provider value={{orderData, newOrders, validatedOrders, deliveredOrders, validate, success, deliver, orderOfID, loadOrders}}>
            {children}
        </orderContext.Provider>
    )
}
