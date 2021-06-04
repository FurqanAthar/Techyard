import React from 'react'
import { useHistory } from 'react-router-dom'
import { orderContext } from '../../context/OrdersContext'

export default function OrderCard({data}) {
    const {validate, deliver} = React.useContext(orderContext)
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
                    <button className="btn btn-primary" onClick = {() => history.push(`/orderdetail/${data.id}`)}>More Info</button>
                    {
                        data.status === `new` && <button className="btn btn-secondary" onClick = {() => validate(data.id)}>Validate</button>
                    }
                    {
                        data.status === `validated` && <button className="btn btn-secondary" onClick = {() => deliver(data.id)}>Deliver</button>
                    }
                    {
                        data.status === `delivered` && <button className="btn btn-secondary">Delivered</button>
                    }
                </div>
            </div>
       </>
    )
}
