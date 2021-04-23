import React from 'react'
import {firestore} from '../firebase'
import { Alert } from 'react-bootstrap'
import Navbar from '../components/navbar'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../context/authContext'
import {cartContext} from '../context/CartContext'
import {applyDiscount} from '../utilityFunctions/utils'
import {orderContext} from '../admin/context/OrdersContext'
import {couponContext} from '../admin/context/couponsContext'


export default function Checkout() {
    const [discountApplied, setDiscountApplied] = React.useState(false)
    const {cart, total, emptyCart} = React.useContext(cartContext)
    const {couponData} = React.useContext(couponContext)
    const [success, setSuccess] = React.useState(false)
    const {validate} = React.useContext(orderContext)
    const [dprice, setDprice] = React.useState(total)
    const [discount, setDiscount] = React.useState(0)
    const [error, setError] = React.useState(false)
    const couponRef = React.useRef()
    const {currentUser} = useAuth()
    const history = useHistory()

    if (cart.length === 0) {
        history.push('/mycart')
    }

    const applyCoupon = (event) => {
        event.preventDefault()
        let couponEntered = couponRef.current.value
        let discountCopy = 0
        couponData.forEach(item => {
            if (item.code === couponEntered) {
                discountCopy = item.discount
                setDiscount(item.discount)
            }
        })
        if (discountCopy !== 0) {
            setDprice(applyDiscount(discountCopy, total))
            setDiscountApplied(true)
        }
        else {
            setError(true)
            setTimeout(() => setError(false), 3000)
        }
    }

    const submitOrder = () => {
        firestore.collection('orders').add({
            userId: currentUser.uid,
            data: cart,
            price: parseFloat(dprice),
            status: `new`
        }).then(async (doc) => {
            await validate(doc.id)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
                emptyCart()
            }, 3000)
        })
    }

    return (
        <>
            <Navbar/>
            <div className="section checkout">
                {
                    error && <Alert variant="danger">Invalid Coupon</Alert>
                }
                {
                    success && <Alert variant="success">Order Placed!</Alert>
                }
                <p>Total: <span>{total}</span></p>
                {
                    discountApplied && (
                        <>
                            <p>Discount: <span>{discount}%</span></p>
                            <p>Discounted Price: <span>{dprice}</span></p>
                        </>
                    )
                }
                <div className="signup">
                    <form className="signup-container" onSubmit={(e) => applyCoupon(e)}>
                        <label>
                            Apply Coupon
                            <input type="text" ref={couponRef}/>
                        </label>
                        <button className="btn btn-primary" disabled={discountApplied}>Apply Coupon!</button>
                        <span> </span>
                    </form>
                </div>
                <button className="btn btn-secondary" onClick={submitOrder}>Checkout</button>
            </div>
        </>
    )
}
