import React from 'react'
import EmptyCart from '../components/cart/EmptyCart'
import SingleProductCart from '../components/cart/SingleProductCart'
import HeadphoneSingleProductCart from '../components/cart/HeadphoneSingleProductCart'
import { cartContext } from '../context/CartContext'
import { useAuth } from '../context/authContext'
import { useHistory } from 'react-router-dom'

export default function MyCart() {
    const {cart, total} = React.useContext(cartContext)
    const { currentUser } = useAuth()
    const history = useHistory()
    
    const redirect = (link) => {
        history.push(link)
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
                                    else if (item.which == `headphone`) {
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
                                    <button className="btn btn-secondary">Place Order!</button>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
