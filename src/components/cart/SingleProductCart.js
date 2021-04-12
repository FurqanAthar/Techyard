import React from 'react'
import {FaAngleUp, FaAngleDown, FaTimes} from "react-icons/fa";
import {cartContext} from '../../context/CartContext'

export default function SingleProductCart({data}) {
    const {increaseAmount, decreaseAmount, removeItem} = React.useContext(cartContext)
    const {id, model, price, image, color, amount, which} = data
    return (
        <>
            <div className="cart-item">
                <img src={image} alt={model}/>
                <div className="content">
                    <h2>{model}</h2>
                    <p>Rs.{price}</p>
                    <h4>Color: {color}</h4>
                </div>
                <div>
                    <button type="button" className="cart-btn amount-btn" onClick={() => {increaseAmount(id, color, which)}}><FaAngleUp/></button>
                    <p className="item-amount">{amount}</p>
                    <button type="button" className="cart-btn amount-btn" onClick={() => {decreaseAmount(id, color, which)}}><FaAngleDown/></button>
                </div>
                <div className="remove-item-btn">
                    <button type="button" className="cart-btn amount-btn" onClick={() => {removeItem(id, color, which)}}><FaTimes/></button>
                </div>
            </div>
        </>
    )
}
