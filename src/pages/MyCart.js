import React from 'react'
import EmptyCart from '../components/cart/EmptyCart'
import SingleProductCart from '../components/cart/SingleProductCart'
import HeadphoneSingleProductCart from '../components/cart/HeadphoneSingleProductCart'
import { cartContext } from '../context/CartContext'
import { useAuth } from '../context/authContext'
import { useHistory } from 'react-router-dom'
import {firestore} from '../firebase'

export default function MyCart() {
    const {cart, total} = React.useContext(cartContext)
    const { currentUser } = useAuth()
    const history = useHistory()
    
    const redirect = (link) => {
        history.push(link)
    }

    const submitOrder = () => {
        firestore.collection('orders').add({
            userId: currentUser.uid,
            data: cart
        })
    }

    const getOrder = () => {
        firestore.collection('orders').get().then((data) => {
            data.forEach((doc) => {
                console.log(doc.id, " => ", doc.data())
            })
        })
    }

    return (
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
                            <h2>Rs.{total}</h2>
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
    )
}
