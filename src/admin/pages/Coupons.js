import React from 'react'
import {useHistory} from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'
import {couponContext} from '../context/couponsContext'
import CouponCard from '../components/coupons/CouponCard'

export default function Coupons() {
    const {couponData, removeCoupon} = React.useContext(couponContext)
    const history = useHistory()
    return (
        <>
            <AdminNavbar/>
            <div className="section">
                <button className="btn btn-secondary">All Coupons</button>
                <button className="btn btn-primary" onClick={() => history.push('/addcoupon')}>Add Coupon</button>
            </div>
            <div className="section d-flex">
                <div className="cart-section">
                    {
                        couponData.length > 0 ? couponData.map(item => {
                            return <CouponCard data = {{item, removeCoupon}}/>
                        }) : 
                        <div>
                            <h2>No Coupons to Show...</h2>
                            <button className="btn btn-secondary" onClick={()=>history.push('/addcoupon')}>Add Coupons</button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
