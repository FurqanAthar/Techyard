import React from 'react'
import { v4 as uuidv4} from 'uuid'
import {Alert} from 'react-bootstrap'
import {storage} from '../../../firebase'
import {useParams, useHistory} from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar'
import {addHeadphoneContext} from '../../context/AddHeadphoneContext'

export default function EditHeadphone() {
    const {headphoneData, success, editHeadphone} = React.useContext(addHeadphoneContext)
    const [updateState, setUpdateState] = React.useState(0)
    const [loading, setLoading] = React.useState(false)
    const [product, setProduct] = React.useState(null)
    const noiseCancelRef = React.useRef()
    const descriptionRef = React.useRef()
    const playbackRef = React.useRef()
    const batteryRef = React.useRef()
    const stockRef = React.useRef()
    const modelRef = React.useRef()
    const priceRef = React.useRef()
    const brandRef = React.useRef()
    const history = useHistory()
    const {id} = useParams()
    
    React.useEffect(() => {
        headphoneData.forEach(item => {
            if (item.id === id && updateState === 0) {
                setProduct({...item})
            }
        })
    }, [updateState, headphoneData])
    
    const changeWireless = () => {
        setProduct({...product, features:{...product.features, wireless:!product.features.wireless}})
    }

    const handleData = (e) => {
        let productCopy = product
        productCopy.model = modelRef.current.value
        productCopy.description = descriptionRef.current.value
        productCopy.price = parseInt(priceRef.current.value)
        productCopy.brand = brandRef.current.value
        productCopy.stock = parseInt(stockRef.current.value)
        productCopy.features.battery = batteryRef.current.value
        productCopy.features.playback = playbackRef.current.value
        productCopy.features.noiseCancel = noiseCancelRef.current.value
        setProduct({...productCopy})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let productCopy = product
        delete productCopy.id
        setProduct({...productCopy})
        editHeadphone(product, id)
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
                        <button className="btn btn-primary" onClick={() => history.push('/adminheadphone')}>All Headphones</button>
                        <button className="btn btn-primary" onClick={() => history.push('/addheadphone')}>Add Headphone</button>
                    </div>
                    {
                        (product) ?
                        <form onSubmit={handleSubmit}>
                            <label>Model <input type="text" ref={modelRef} value={product.model} onChange={handleData} required/></label>
                            <label>Description <input type="text" ref={descriptionRef} value={product.description} onChange={handleData} required/></label>
                            <label>Price <input type="number" ref={priceRef} value={product.price} onChange={handleData} required/></label>
                            <label>Brand <input type="text" ref={brandRef} value={product.brand} onChange={handleData} required/></label>
                            <label>Stock<input type="number" ref={stockRef} value={product.stock} onChange={handleData} required/></label>
                            <label>Battery<input type="text" ref={batteryRef} value={product.features.battery} onChange={handleData} required/></label>
                            <label>Playback<input type="text" ref={playbackRef} value={product.features.playback} onChange={handleData} required/></label>
                            <label>Noise Cancel<input type="text" ref={noiseCancelRef} value={product.features.noiseCancel} onChange={handleData} required/></label>
                            <label className="container" onClick={changeWireless}>Wireless
                                <input type="checkbox" name="wirekess" checked={product.features.wireless ? true : false}/>
                            </label>
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
