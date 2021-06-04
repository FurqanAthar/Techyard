import React from 'react'

export default function AdminQueryCard({data}) {
    return (
        <>
            <div className="section order">
                <h4>Query ID: <span>{data.id}</span></h4>
                <h4>Status: <span>{data.status}</span></h4>
                <p>Description: <span>{data.description}</span></p>
                <p>Feedback: <span>{data.feedback ? data.feedback : 'No Feedback Yet...'}</span></p>
            </div>
        </>
    )
}
