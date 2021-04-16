import React from 'react'
import {useHistory} from 'react-router-dom'
import {couponContext} from '../context/couponsContext'
import CouponCard from '../components/coupons/CouponCard'

export default function Coupons() {
    const {couponData, removeCoupon} = React.useContext(couponContext)
    const history = useHistory()
    return (
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
    )
}
