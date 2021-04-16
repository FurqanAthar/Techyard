import React from 'react'
import {Alert} from 'react-bootstrap'
import {couponContext} from '../context/couponsContext'

export default function AddCoupons() {
    const {addCoupon} = React.useContext(couponContext)
    const [success, setSuccess] = React.useState(false)
    const discountRef = React.useRef()
    const codeRef = React.useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        addCoupon(codeRef.current.value, parseInt(discountRef.current.value))
        setSuccess(true)
        setTimeout(()=>setSuccess(false), 3000)
        codeRef.current.value = ""
        discountRef.current.value = ""
    }
    return (
        <div className="signup">
            <div className="signup-container">
                {
                    success && <Alert variant="success">Coupon Added</Alert>
                }
                <form onSubmit={handleSubmit}>
                    <label>
                        Add Code
                        <input type="text" ref={codeRef} required/>
                    </label>
                    <label>
                        Add Discount
                        <input type="number" ref={discountRef} required/>
                    </label>
                    <button className="btn btn-secondary">Add Coupon</button>
                </form>
            </div>
        </div>
    )
}
