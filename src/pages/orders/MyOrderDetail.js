import React from 'react'
import Navbar from '../../components/navbar'
import {useParams, useHistory} from 'react-router-dom'
import {orderContext} from '../../admin/context/OrdersContext'
import MyOrderProductCard from '../../components/orders/MyOrderProductCard'

export default function MyOrderDetail() {
    const {orderData} = React.useContext(orderContext)
    const history = useHistory()
    const {id} = useParams()
    if (orderData.length === 0) {
        return (
            <>
                <Navbar/>
                <div className="section">Loading...</div>
            </>
        )
    }
    else {
        let order = {}
        orderData.forEach(item => {
            if (item.id === id) {
                order = {...item}
            }
        })
        return (
            <>
                <Navbar/>
                <div className="section">
                    <button className="btn btn-primary" onClick={() => history.push('/mycart')}>My Cart</button>
                    <button className="btn btn-primary" onClick={() => history.push('/myorders')}>My Orders</button>
                </div>
                {
                    Object.entries(order).length > 0 ? (
                        <div className="section">
                            <p>Order ID: {order.id}</p>
                            <p>Status: {order.status}</p>
                            <div className="d-flex">
                                <div className="cart-section">
                                    {
                                        order.data.map((item, index) => {
                                            return <MyOrderProductCard data = {{...item}} status = {order.status} key = {index}/>
                                        })
                                    }
                                </div>
                            </div>
                            <p>Total: Rs.{order.price}</p>
                        </div>
                    ) : <p>No Order with this ID...</p>
                }
            </>
        )
    }
}
