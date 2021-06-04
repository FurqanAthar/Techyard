import React from 'react'
import {Alert} from 'react-bootstrap'
import {adminQueryContext} from '../../../context/adminQueryContext'

export default function QueryFeedbackCard({data}) {
    const {feedback, loading, setLoad} = React.useContext(adminQueryContext)
    const [success1, setSuccess1] = React.useState(``)
    const feedbackRef = React.useRef()

    const addFeedback = async (e) => {
        e.preventDefault()
        await feedback(data.id, feedbackRef.current.value).then(() => {
            setSuccess1(`Feedback Added`)
            setTimeout(()=>{
                setSuccess1(``)
                setLoad(true)
            }, 3000)
        })
        feedbackRef.current.value = ``
    }

    return (
        <>
            <div className="mycart-section">
                {
                    success1 && <Alert variant="success">{success1}</Alert>
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
