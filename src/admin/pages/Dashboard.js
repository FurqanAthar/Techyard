import React from 'react'
import {useHistory} from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'
import {orderContext} from '../context/OrdersContext'
import OrderCard from '../components/orders/OrderCard'
import {couponContext} from '../context/couponsContext'
import {addMobileContext} from '../context/AddMobileContext'
import {adminQueryContext} from '../../context/adminQueryContext'
import {addHeadphoneContext} from '../context/AddHeadphoneContext'
import {addPowerbankContext} from '../context/AddPowerbankContext'

export default function Dashboard() {
    const {openQueries} = React.useContext(adminQueryContext)
    const {headphoneData} = React.useContext(addHeadphoneContext)
    const {powerbankData} = React.useContext(addPowerbankContext)
    const {mobileData} = React.useContext(addMobileContext)
    const {couponData} = React.useContext(couponContext)
    const {orderData, newOrders} = React.useContext(orderContext)
    const history = useHistory()
    return (
        <>
            <AdminNavbar/>
            <div className="section d-flex">
                <div className="admindashboard-orders">
                    <div className="count-button">
                        <p>New Orders: {newOrders.length}</p>
                        <button className="btn btn-secondary" onClick={() => history.push('/orders')}>See All</button>
                    </div>
                    {
                        newOrders.length > 0 ? (
                            <>
                                {
                                    newOrders.map((item, index) => {
                                        if (index < 2) {
                                            return <OrderCard data={{...item}} key={index}/>
                                        }
                                    })
                                }
                            </>
                        ) : <p>No orders to show...</p>
                    }
                </div>
            </div>
            <div className="section d-flex">
                <div className="admindashboard-orders">
                    <div className="count-button">
                        <p>Open Queries: {openQueries.length}</p>
                        <button className="btn btn-secondary" onClick={() => history.push('/reviewqueries')}>See All</button>
                    </div>
                </div>
            </div>
            <div className="section d-flex">
                <div className="admindashboard-card">
                    <p>Total Mobiles: <span>{mobileData.length}</span></p>
                    <button className="btn btn-primary" onClick={()=>history.push('/adminmobile')}>Edit Mobiles</button>
                    <button className="btn btn-secondary" onClick={()=>history.push('/addmobile')}>Add Mobiles</button>
                </div>
                <div className="admindashboard-card">
                    <p>Total Headphones: <span>{headphoneData.length}</span></p>
                    <button className="btn btn-primary" onClick={()=>history.push('/adminheadphone')}>Edit Headphones</button>
                    <button className="btn btn-secondary" onClick={()=>history.push('/addheadphone')}>Add Headphones</button>
                </div>
                <div className="admindashboard-card">
                    <p>Total Powerbanks: <span>{powerbankData.length}</span></p>
                    <button className="btn btn-primary" onClick={()=>history.push('/adminpowerbank')}>Edit Powerbanks</button>
                    <button className="btn btn-secondary" onClick={()=>history.push('/addpowerbank')}>Add Powerbanks</button>
                </div>
                <div className="admindashboard-card">
                    <p>Total Coupons: <span>{couponData.length}</span></p>
                    <button className="btn btn-primary" onClick={()=>history.push('/coupons')}>Edit Coupons</button>
                    <button className="btn btn-secondary" onClick={()=>history.push('/addcoupon')}>Add Coupons</button>
                </div>
            </div>
        </>
    )
}
