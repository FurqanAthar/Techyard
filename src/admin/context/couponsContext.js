import React from 'react'
import {firestore} from '../../firebase'

export const couponContext = React.createContext();

export default function CouponContextProvider({children}) {
    const [couponData, setCouponData] = React.useState([])
    
    React.useEffect(() => {
        loadCoupons()
    }, [])

    const loadCoupons = () => {
        firestore.collection('coupons').get().then(data => {
            let dataArray = []
            data.forEach(doc => {
                var obj = {
                    id : doc.id,
                    ...doc.data()
                }
                dataArray.push(obj)
            })
            setCouponData(dataArray)
        })
    }
    
    const addCoupon = (code, discount) => {
        firestore.collection('coupons').add({
            code : code,
            discount: parseInt(discount)
        })
    }

    const editCoupon = async (id, code, discount) => {
        var obj = {
            code: code,
            discount: discount
        }
        return await firestore.collection('coupons').doc(id).set(obj)
    }

    const removeCoupon = (id) => {
        firestore.collection('coupons').doc(id).delete()
        loadCoupons()
    }
    return (
        <couponContext.Provider value={{couponData, addCoupon, removeCoupon, editCoupon}}>
            {children}
        </couponContext.Provider>
    )
}
