import React from 'react'
import {useHistory} from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar'
import {orderContext} from '../../context/OrdersContext'
import OrderCard from '../../components/orders/OrderCard'

export default function Orders() {
    const {newOrders} = React.useContext(orderContext)
    const history = useHistory()
    return (
        <>
            <AdminNavbar/>
            <div className="section">
                <button className="btn btn-secondary" onClick={() => history.push('/orders')}>New Orders</button>
                <button className="btn btn-primary" onClick={() => history.push('/validatedorders')}>Validated Orders</button>
                <button className="btn btn-primary" onClick={() => history.push('/deliveredorders')}>Delivered Orders</button>
            </div>
            <div className="section">
                {
                    newOrders.length > 0 ? (
                        newOrders.map((item, index) => {
                            return <OrderCard data = {{...item}} key = {index}></OrderCard>
                        })
                    ) : <p>No New Orders...</p>
                }
            </div>
        </>
    )
}
