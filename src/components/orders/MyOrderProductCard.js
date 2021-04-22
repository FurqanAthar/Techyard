import React from 'react'
import { Alert } from 'react-bootstrap'
import {firestore} from '../../firebase'
import {useAuth} from '../../context/authContext'

export default function MyOrderProductCard({data, status}) {
    const [success, setSuccess] = React.useState('')
    const reviewRef = React.useRef()
    const {currentUser} = useAuth()

    const addReview = (e) => {
        e.preventDefault()
        firestore.collection(`${data.which}s`).get().then(collection => {
            collection.forEach(doc => {
                if (doc.id === data.id) {
                    let reviews = doc.data().reviews
                    let obj = {
                        userId: currentUser.uid,
                        review: reviewRef.current.value
                    }
                    reviews.push(obj)
                    firestore.collection(`${data.which}s`).doc(data.id).update({
                        reviews: [...reviews]
                    }).then(() => {
                        reviewRef.current.value = ""
                        setSuccess("Review Added")
                        setTimeout(()=>{
                            setSuccess("")
                        }, 3000)
                    })
                }
            })
        })
    }
    return (
        <>
            <div className="mycart-section">
                {
                    success && <Alert variant="success">{success}</Alert>
                }
                <div className="myorder-product-item">
                    <img src={data.image} alt={data.model}/>
                    <div className="content">
                        <h2>{data.model}</h2>
                        <p>Rs.{data.price}</p>
                        {
                            data.which === `mobile` && <p>Color: {data.color}</p>
                        }
                        <h4 className="item-amount">You ordered: {data.amount}</h4>
                        {
                            status === `delivered` && <h4>Delivered: {data.deliveredAmount}</h4>
                        }
                        {
                            status === `delivered` && <h4>Returned Amount: Rs.{data.returnedAmount}</h4>
                        }
                    </div>
                    <h4>Category: {data.which.toUpperCase()}</h4>
                </div>
                {
                    status === `delivered` && 
                    <div className="signup">
                        <div className="addproduct-container">
                            <form onSubmit={addReview}>
                                <label>Add Review
                                    <input type="text" ref={reviewRef}/>
                                </label>
                                <button className="btn btn-primary review-btn">Add Review</button>
                            </form>
                        </div>
                    </div>
                }
            </div>  
        </>
    )
}
