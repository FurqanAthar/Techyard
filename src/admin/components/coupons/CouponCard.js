import React from 'react'
import {FaTimes} from "react-icons/fa";
import {useHistory} from 'react-router-dom'

export default function CouponCard({data}) {
    const {code, id, discount} = data.item
    const history = useHistory()
    const redirect = (id) => {
        history.push(`/editcoupon/${id}`)
    }
    return (
        <div className="coupon-card">
            <div className="coupon-content">
                <p>Code: <span>{code}</span></p>
                <p>Discount: <span>{discount}%</span></p>
            </div>
            <div className="coupon-buttons">
                <button className="btn btn-secondary" onClick={()=>redirect(id)}>EDIT</button>
            </div>
            <div className="remove-item-btn">
                <button className="cart-btn" onClick={()=>data.removeCoupon(id)}><FaTimes/></button>
            </div>
        </div>
    )
}
