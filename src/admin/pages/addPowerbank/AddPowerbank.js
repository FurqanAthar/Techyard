import React from 'react'
import { v4 as uuidv4} from 'uuid'
import {Alert} from 'react-bootstrap'
import {storage} from '../../../firebase'
import {useHistory} from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar'
import {addPowerbankContext} from '../../context/AddPowerbankContext'

export default function AddPowerbank() {
    const {addPowerbank, success} = React.useContext(addPowerbankContext)
    const [loading, setLoading] = React.useState(false)
    const [imageURL, setImageURL] = React.useState(null)
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
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        var dataObject = {
            model : modelRef.current.value,
            description : descriptionRef.current.value,
            price : parseInt(priceRef.current.value),
            brand : brandRef.current.value,
            stock: parseInt(stockRef.current.value),
            features: {
                capacity: capacityRef.current.value,
                wattage: wattageRef.current.value,
                input: inputRef.current.value,
                output: outputRef.current.value,
                dimensions: dimensionsRef.current.value
            },
            image: imageURL,
            reviews: []
        }
        await addPowerbank(dataObject)
        history.push('/adminpowerbank')
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
                    setImageURL(picture)
                    setLoading(false)
                }).catch((error) => {console.error(error)})
        })
    }

    return (
        <>
            <AdminNavbar/>
            <div className="signup section">
                <div className="addproduct-container">
                    {
                        success && <Alert variant="success">Updated!</Alert>
                    }
                    <div className="section">
                        <button className="btn btn-primary" onClick={() => history.push('/adminpowerbank')}>All Powerbanks</button>
                        <button className="btn btn-secondary">Add Powerbank</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label>Model <input type="text" ref={modelRef} required/></label>
                        <label>Description <input type="text" ref={descriptionRef} required/></label>
                        <label>Price <input type="number" ref={priceRef} required/></label>
                        <label>Brand <input type="text" ref={brandRef} required/></label>
                        <label>Stock <input type="number" ref={stockRef} required/></label>
                        <label>Capacity<input type="text" ref={capacityRef} required/></label>
                        <label>Wattage<input type="text" ref={wattageRef} required/></label>
                        <label>Input<input type="text" ref={inputRef} required/></label>
                        <label>Output<input type="text" ref={outputRef} required/></label>
                        <label>Dimensions<input type="text" ref={dimensionsRef} required/></label>
                        <label>Image Upload <input type="file" name={`image`} accept="image/*" required onChange={handleImage}/></label>
                        <button className="btn btn-secondary" disabled={loading}>Add Product</button>
                    </form>
                </div>
            </div>
        </>
    )
}
