import React from 'react'
import { v4 as uuidv4} from 'uuid'
import {Alert} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {storage, firestore} from '../../../firebase'
import AdminNavbar from '../../components/AdminNavbar'

export default function AddComingSoon() {
    const [alreadyPresent, setAlreadyPresent] = React.useState({})
    const [imageURL, setImageURL] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    const [loaded, setLoaded] = React.useState(false)
    const descriptionRef = React.useRef()
    const titleRef = React.useRef()

    if (!loaded) {
        firestore.collection('comingsoon').get().then(data => {
            data.forEach(doc => {
                let id = doc.id
                setAlreadyPresent({id, ...doc.data()})
                setLoaded(true)
            })
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        firestore.collection('comingsoon').add({
            title : titleRef.current.value,
            description : descriptionRef.current.value,
            image: imageURL,
            registrations : []
        }).then(() => {
            setSuccess(true)
            setTimeout(()=>{
                setSuccess(false)
            }, 3000)
            setLoaded(false)
        })
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
                    return picture
                }).then((url)=>{
                    if (loaded) {
                        let alreadyPresentCopy = alreadyPresent
                        alreadyPresentCopy = {...alreadyPresentCopy, image:url}
                        setAlreadyPresent({...alreadyPresentCopy})
                    }
                }).catch((error) => {console.error(error)})
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        let id = alreadyPresent.id
        let alreadyPresentCopy = alreadyPresent
        delete alreadyPresentCopy.id
        firestore.collection('comingsoon').doc(id).update({...alreadyPresentCopy}).then(() => {
            setSuccess(true)
            setTimeout(()=>{
                setSuccess(false)
            }, 3000)
        })
        setLoaded(false)
    }

    const handleChange = (e) => {
        let alreadyPresentCopy = alreadyPresent
        alreadyPresentCopy = {...alreadyPresentCopy, [e.target.name]:e.target.value}
        setAlreadyPresent({...alreadyPresentCopy})
    }

    return (
        <>
            <AdminNavbar/>
            {
                !loaded ? (
                    <div className="signup section">
                        <div className="addproduct-container">
                            {
                                success && <Alert variant="success">Added!</Alert>
                            }
                            <form onSubmit={handleSubmit}>
                                <label>Model <input type="text" ref={titleRef} required/></label>
                                <label>Description <input type="text" ref={descriptionRef} required/></label>
                                <label>Image Upload <input type="file" name={`image`} accept="image/*" required onChange={handleImage}/></label>
                                <button className="btn btn-secondary" disabled={loading}>Add Product</button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="signup section">
                        <div className="addproduct-container">
                            {
                                success && <Alert variant="success">Updated!</Alert>
                            }
                            <form onSubmit={handleUpdate}>
                                <label>Model <input type="text" name="title" value={alreadyPresent.title} onChange={handleChange} required/></label>
                                <label>Description <input type="text" name="description" value={alreadyPresent.description} onChange={handleChange} required/></label>
                                <label>Image Upload <input type="file" name={`image`} accept="image/*" onChange={handleImage}/></label>
                                <button className="btn btn-secondary" disabled={loading}>Add Product</button>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    )
}
