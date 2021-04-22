import React from 'react'
import {useHistory} from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar'
import {orderContext} from '../../context/OrdersContext'
import OrderCard from '../../components/orders/OrderCard'

export default function DeliveredOrders() {
    const {deliveredOrders} = React.useContext(orderContext)
    const history = useHistory()
    return (
        <>
            <AdminNavbar/>
            <div className="section">
                <button className="btn btn-primary" onClick={() => history.push('/orders')}>New Orders</button>
                <button className="btn btn-primary" onClick={() => history.push('/validatedorders')}>Validated Orders</button>
                <button className="btn btn-secondary" onClick={() => history.push('/deliveredorders')}>Delivered Orders</button>
            </div>
            <div className="section">
                {
                    deliveredOrders.length > 0 ? (
                        deliveredOrders.map((item, index) => {
                            return <OrderCard data = {{...item}} key = {index}></OrderCard>
                        })
                    ) : <p>No New Orders...</p>
                }
            </div>  
        </>
    )
}
