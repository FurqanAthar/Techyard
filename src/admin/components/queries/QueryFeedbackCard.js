import React from 'react'
import {Alert} from 'react-bootstrap'
import { firestore } from '../../../firebase'
import {adminQueryContext} from '../../../context/adminQueryContext'

export default function QueryFeedbackCard({data}) {
    const {feedback, loading, success} = React.useContext(adminQueryContext)
    const feedbackRef = React.useRef()

    const addFeedback = async (e) => {
        e.preventDefault()
        await feedback(data.id, feedbackRef.current.value)
        feedbackRef.current.value = ``
    }

    return (
        <>
            <div className="mycart-section">
                {
                    success && <Alert variant="success">{success}</Alert>
                }
                <div className="query-item">
                    <h4>Query ID: <span>{data.id}</span></h4>
                    <div className="content">
                        <h3>{data.description}</h3>
                    </div>
                </div>
                {
                    data.status === `open` ? 
                    <div className="signup">
                        <div className="addproduct-container">
                            <form onSubmit={addFeedback}>
                                <label>Add Feedback
                                    <input type="text" ref={feedbackRef}/>
                                </label>
                                <button className="btn btn-primary review-btn" disabled={loading}>Add Feedback</button>
                            </form>
                        </div>
                    </div> : (
                        <p>Feedback: {data.feedback}</p>
                    )
                }
            </div>  
        </>
    )
}
