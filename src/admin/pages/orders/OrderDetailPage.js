import React from 'react'
import { Alert } from 'react-bootstrap';
import AdminNavbar from '../../components/AdminNavbar'
import {useParams, useHistory} from "react-router-dom";
import {orderContext} from '../../context/OrdersContext'
import OrderProductCard from '../../components/orders/OrderProductCard'

export default function OrderDetailPage() {
    const {orderData, validate, success, deliver} = React.useContext(orderContext)
    const history = useHistory();
    const {id} = useParams();
    if (orderData.length === 0) {
        return (
            <>
                <AdminNavbar/>
                <div className="section">Loading...</div>
            </>
        )
    }
    else {
        let product = {}
        orderData.forEach(item => {
            if (item.id === id) {
                product = {...item}
            }
        })
        return (
            <>
                <AdminNavbar/>
                {
                    Object.entries(product).length > 0 ? (
                        <div className="section">
                            <p>Order ID: {product.id}</p>
                            <p>Status: {product.status}</p>
                            <div className="d-flex">
                                <div className="cart-section">
                                    {
                                        product.data.map((item, index) => {
                                            return <OrderProductCard data = {{...item}} key = {index}/>
                                        })
                                    }
                                </div>
                            </div>
                            <p>Total: Rs.{product.price}</p>
                            {
                                success && <Alert variant = "success">{success}</Alert>
                            }
                            {
                                product.status === `new` && <button className="btn btn-secondary" onClick = {() => validate(id)}>Validate</button>
                            }
                            {
                                product.status === `validated` && <button className="btn btn-secondary" onClick = {() => deliver(id)}>Deliver</button>
                            }
                            {
                                product.status === `delivered` && <button className="btn btn-secondary">Delivered</button>
                            }
                        </div>
                    ) : <p>No Order with this ID...</p>
                }
            </>
        )
    }
}
