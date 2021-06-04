import React from 'react'
import Navbar from '../../components/navbar'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../../context/authContext'
import MyOrderCard from '../../components/orders/MyOrderCard'
import {orderContext} from '../../admin/context/OrdersContext'

export default function MyOrders() {
    const {orderData, orderOfID} = React.useContext(orderContext)
    const [myOrders, setMyOrders] = React.useState([])
    const [loaded, setLoaded] = React.useState(false)
    const {currentUser} = useAuth()
    const history = useHistory()
    
    if (orderData.length > 0 && !loaded) {
        setMyOrders([...orderOfID(currentUser.uid)])
        setLoaded(true)
    }

    return (
        <>
            <Navbar/>
            <div className="section">
                <button className="btn btn-primary" onClick={() => history.push('/mycart')}>My Cart</button>
                <button className="btn btn-secondary" onClick={() => history.push('/myorders')}>My Orders</button>
            </div>
            <div className="section">
                {
                    myOrders.length === 0 ? <p>No Orders to show...</p> : (
                        myOrders.map((item, index) => {
                            return <MyOrderCard data={{...item}} key={index}/>
                        })
                    )
                }
            </div>
        </>
    )
}
