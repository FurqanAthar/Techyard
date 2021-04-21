import React from 'react'
import {firestore} from '../firebase'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import { cartContext } from '../context/CartContext'
import EmptyCart from '../components/cart/EmptyCart'
import { Alert } from 'react-bootstrap'
import {applyDiscount} from '../utilityFunctions/utils'
import {couponContext} from '../admin/context/couponsContext'
import SingleProductCart from '../components/cart/SingleProductCart'
import HeadphoneSingleProductCart from '../components/cart/HeadphoneSingleProductCart'
import Navbar from '../components/navbar'

export default function MyCart() {
    const {cart, total, emptyCart} = React.useContext(cartContext)
    const [discountedPrice, setDiscountedPrice] = React.useState(total)
    const [error, setError] = React.useState(false)
    const {couponData} = React.useContext(couponContext)
    const { currentUser } = useAuth()
    const couponRef = React.useRef()
    const history = useHistory()
    
    const redirect = (link) => {
        history.push(link)
    }

    const submitOrder = () => {
        firestore.collection('orders').add({
            userId: currentUser.uid,
            data: cart,
            price: (discountedPrice != 0) ? parseInt(discountedPrice) : parseInt(total),
            status: `new`
        })
        emptyCart()
    }

    const getOrder = () => {
        firestore.collection('orders').get().then((data) => {
            data.forEach((doc) => {
                console.log(doc.id, " => ", doc.data())
            })
        })
    }

    const applyCoupon = (event) => {
        event.preventDefault()
        let discount = 0
        let couponEntered = couponRef.current.value
        couponData.forEach(item => {
            if (item.code === couponEntered) {
                discount = item.discount
            }
        })
        if (discount !== 0) {
            setDiscountedPrice(applyDiscount(discount, total))
        }
        else {
            setError(true)
            setTimeout(() => setError(false), 3000)
        }
    }

    return (
        <>
            <Navbar/>
            <div className="section d-flex">
                <div className="cart-section">
                    {
                        cart.length === 0  && <EmptyCart/>
                    }
                    {
                        cart.length > 0 && (
                            <div>
                                {
                                    cart.map((item, index) => {
                                        if (item.which == `mobile`) {
                                            return <SingleProductCart data = {item} key={index}/>
                                        }
                                        else if (item.which == `headphone` || item.which == `powerbank`) {
                                            return <HeadphoneSingleProductCart data = {item} key = {index}></HeadphoneSingleProductCart>
                                        }
                                    })
                                }
                                <p>Total</p>
                                {
                                    discountedPrice > 0 && <h2 className="discounted-price">Discounted Price: <span>Rs.{discountedPrice}</span></h2> 
                                }
                                <h3>Rs.{total}</h3>
                                {
                                    error && <Alert variant="danger">Invalid Coupon</Alert>
                                }
                                <div className="signup">
                                    <form className="signup-container" onSubmit={(e) => applyCoupon(e)}>
                                        <label>
                                            Coupon
                                            <input type="text" ref={couponRef}/>
                                        </label>
                                        <button className="btn btn-secondary">Apply Coupon!</button>
                                    </form>
                                </div>
                                {
                                    !currentUser ? (
                                        <button className="btn btn-secondary" onClick = {() => redirect('/login')}>Login to Checkout!</button>
                                    ) : (
                                        <button className="btn btn-secondary" onClick={submitOrder}>Place Order!</button>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
