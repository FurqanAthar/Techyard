import React from 'react'
import { v4 as uuidv4} from 'uuid'
import {Alert} from 'react-bootstrap'
import {storage} from '../../../firebase'
import {useParams, useHistory} from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar'
import {addPowerbankContext} from '../../context/AddPowerbankContext'

export default function EditPowerbank() {
    const {powerbankData, success, editPowerbank} = React.useContext(addPowerbankContext)
    const [updateState, setUpdateState] = React.useState(0)
    const [loading, setLoading] = React.useState(false)
    const [product, setProduct] = React.useState(null)
    const descriptionRef = React.useRef()
    const dimensionsRef = React.useRef()
    const capacityRef = React.useRef()
    const wattageRef = React.useRef()
    const outputRef = React.useRef()
    const inputRef = React.useRef()
    const stockRef = React.useRef()
    const modelRef = React.useRef()
    const priceRef = React.useRef()
    const brandRef = React.useRef()
    const history = useHistory()
    const {id} = useParams()
    
    React.useEffect(() => {
        powerbankData.forEach(item => {
            if (item.id === id && updateState === 0) {
                setProduct({...item})
            }
        })
    }, [updateState, powerbankData])
    
    const handleData = (e) => {
        let productCopy = product
        productCopy.model = modelRef.current.value
        productCopy.description = descriptionRef.current.value
        productCopy.price = parseInt(priceRef.current.value)
        productCopy.brand = brandRef.current.value
        productCopy.stock = parseInt(stockRef.current.value)
        productCopy.features.capacity = capacityRef.current.value
        productCopy.features.wattage = wattageRef.current.value
        productCopy.features.input = inputRef.current.value
        productCopy.features.output = outputRef.current.value
        productCopy.features.dimensions = dimensionsRef.current.value
        setProduct({...productCopy})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let productCopy = product
        delete productCopy.id
        setProduct({...productCopy})
        editPowerbank(product, id)
    }

    const handleImage = (e) => {
        setLoading(true)
        let uid = uuidv4()
        let uploadTask = storage.ref(`images/${uid}`).put(e.target.files[0])
        uploadTask.on("state_changed", snapshot => {}, error => console.log(error), () => {
        storage
            .ref('images')
            .child(uid)
            .getDownloadURL()
            .then((picture) => {
                setProduct({...product, 'image':picture})
            }).then(()=>{
                setLoading(false)
            }).catch((error) => {console.error(error)})
        })
    }
    
    return (
        <>
            <AdminNavbar/>
            <div className="signup section">
                <div className="addproduct-container">
                    <div className="section">
                        <button className="btn btn-primary" onClick={() => history.push('/adminpowerbank')}>All Powerbanks</button>
                        <button className="btn btn-primary" onClick={() => history.push('/addpowerbank')}>Add Powerbank</button>
                    </div>
                    {
                        (product) ?
                        <form onSubmit={handleSubmit}>
                            <label>Model <input type="text" ref={modelRef} value={product.model} onChange={handleData} required/></label>
                            <label>Description <input type="text" ref={descriptionRef} value={product.description} onChange={handleData} required/></label>
                            <label>Price <input type="number" ref={priceRef} value={product.price} onChange={handleData} required/></label>
                            <label>Brand <input type="text" ref={brandRef} value={product.brand} onChange={handleData} required/></label>
                            <label>Stock<input type="number" ref={stockRef} value={product.stock} onChange={handleData} required/></label>
                            <label>Capacity<input type="text" ref={capacityRef} value={product.features.capacity} onChange={handleData} required/></label>
                            <label>Wattage<input type="text" ref={wattageRef} value={product.features.wattage} onChange={handleData} required/></label>
                            <label>Input<input type="text" ref={inputRef} value={product.features.input} onChange={handleData} required/></label>
                            <label>Output<input type="text" ref={outputRef} value={product.features.output} onChange={handleData} required/></label>
                            <label>Dimensions<input type="text" ref={dimensionsRef} value={product.features.dimensions} onChange={handleData} required/></label>
                            <label>Image Upload <input type="file" name={`image`} accept="image/*" onChange={handleImage}/></label>
                            {
                                success && <Alert variant="success">Updated!</Alert>
                            }
                            <button className="btn btn-secondary" disabled={loading}>Update</button>
                        </form> : <div className="section">Loading...</div>
                    }
                </div>
            </div>
        </>
    )
}
