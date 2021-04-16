import React from 'react'
import {Alert} from 'react-bootstrap'
import {useHistory, useParams} from 'react-router-dom'
import {couponContext} from '../context/couponsContext'

export default function EditCoupon() {
    const {couponData, editCoupon} = React.useContext(couponContext)
    const [count, setCount] = React.useState(0)
    const history = useHistory()
    const {id} = useParams()
    let discount = 0
    let code = ``

    if (couponData.length > 0) {
        let coupon = {}
        couponData.forEach(item => {
            if (item.id == id) {
                coupon = item
            }
        })
        
        const onchangeCode = (e) => {
            coupon.code = e.target.value
            setCount((prev) => prev + 1)
        }
        
        const onchangeDiscount = (e) => {
            coupon.discount = e.target.value
            setCount((prev) => prev + 1)
        }

        const handleSubmit = async (e) => {
            e.preventDefault()
            await editCoupon(id, coupon.code, parseInt(coupon.discount))
            history.push('/coupons')
        }
        
        return (
            <div className="signup">
                <div className="signup-container">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Edit Code
                            <input type="text" value={coupon.code} onChange={onchangeCode} required/>
                        </label>
                        <label>
                            Edit Discount
                            <input type="number" value={coupon.discount} onChange={onchangeDiscount} required/>
                        </label>
                        <button className="btn btn-secondary">Confirm Edit</button>
                    </form>
                </div>
            </div>
        )
    }
    else {
        return (
            <h1>Loading...</h1>
        )
    }
}
