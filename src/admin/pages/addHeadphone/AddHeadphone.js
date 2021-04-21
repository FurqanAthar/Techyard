import React from 'react'
import { v4 as uuidv4} from 'uuid'
import {Alert} from 'react-bootstrap'
import {storage} from '../../../firebase'
import {useHistory} from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar'
import {addHeadphoneContext} from '../../context/AddHeadphoneContext'

export default function AddHeadphone() {
    const {addHeadphone, success} = React.useContext(addHeadphoneContext)
    const [wireless, setWireless] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [imageURL, setImageURL] = React.useState(null)
    const noiseCancelRef = React.useRef()
    const descriptionRef = React.useRef()
    const playbackRef = React.useRef()
    const batteryRef = React.useRef()
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
                wireless: wireless,
                battery: batteryRef.current.value,
                playback: playbackRef.current.value,
                noiseCancel: noiseCancelRef.current.value
            },
            image: imageURL,
            reviews: []
        }
        await addHeadphone(dataObject)
        history.push('/adminheadphone')
    }
    
    const changeWireless = () => {
        if (wireless === true) {
            setWireless(false)
        }
        else {
            setWireless(true)
        }
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
                        <button className="btn btn-primary" onClick={() => history.push('/adminheadphone')}>All Headphones</button>
                        <button className="btn btn-secondary">Add Headphone</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label>Model <input type="text" ref={modelRef} required/></label>
                        <label>Description <input type="text" ref={descriptionRef} required/></label>
                        <label>Price <input type="number" ref={priceRef} required/></label>
                        <label>Brand <input type="text" ref={brandRef} required/></label>
                        <label>Stock <input type="number" ref={stockRef} required/></label>
                        <label>Battery<input type="text" ref={batteryRef} required/></label>
                        <label>Playback<input type="text" ref={playbackRef} required/></label>
                        <label>Noise Cancel<input type="text" ref={noiseCancelRef} required/></label>
                        <label className="container" onClick={changeWireless}>Wireless
                            <input type="checkbox" name="wireless"/>
                        </label>
                        <label>Image Upload <input type="file" name={`image`} accept="image/*" required onChange={handleImage}/></label>
                        <button className="btn btn-secondary" disabled={loading}>Add Product</button>
                    </form>
                </div>
            </div>
        </>
    )
}
