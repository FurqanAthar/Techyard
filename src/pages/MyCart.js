import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import { cartContext } from '../context/CartContext'
import EmptyCart from '../components/cart/EmptyCart'
import SingleProductCart from '../components/cart/SingleProductCart'
import HeadphoneSingleProductCart from '../components/cart/HeadphoneSingleProductCart'
import Navbar from '../components/navbar'

export default function MyCart() {
    const {cart, total, emptyCart} = React.useContext(cartContext)
    const { currentUser } = useAuth()
    
    const history = useHistory()
    
    const redirect = (link) => {
        history.push(link)
    }

    return (
        <>
            <Navbar/>
            <div className="section">
                <button className="btn btn-secondary" onClick={() => history.push('/mycart')}>My Cart</button>
                <button className="btn btn-primary" onClick={() => history.push('/myorders')}>My Orders</button>
            </div>
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
                                <h3>Rs.{total}</h3>
                                {
                                    !currentUser ? (
                                        <button className="btn btn-secondary"onClick = {() => redirect('/login')}>Login to Checkout!</button>
                                    ) : (
                                        <button className="btn btn-secondary" onClick = {() => redirect('/checkout')}>Checkout</button>
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
