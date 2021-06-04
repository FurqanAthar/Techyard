import React from 'react'
import {useHistory} from 'react-router-dom'

export default function MyOrderCard({data}) {
    const history = useHistory()
    return (
        <>
            <div className="section order">
                <h3>Order ID: <span>{data.id}</span></h3>
                <div className="orders-display">
                    <p>Category: <span>{data.data[0].which.toUpperCase()}</span></p>
                    <p>Model: <span>{data.data[0].model}</span></p>
                    <p>Amount: <span>{data.data[0].amount}</span></p>
                </div>
                <div>
                    <h3>Status: {data.status.toUpperCase()}</h3>
                    <button className="btn btn-secondary" onClick={() => {history.push(`/myorderdetail/${data.id}`)}}>View Details</button>
                </div>
            </div>  
        </>
    )
}
