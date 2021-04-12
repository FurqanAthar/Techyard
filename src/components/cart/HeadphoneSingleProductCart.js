import React from 'react'
import {FaAngleUp, FaAngleDown, FaTimes} from "react-icons/fa";
import {cartContext} from '../../context/CartContext'

export default function HeadphoneSingleProductCart({data}) {
    const {increaseAmount, decreaseAmount, removeItem} = React.useContext(cartContext)
    const {id, model, price, image, amount, which} = data
    return (
        <>
            <div className="cart-item">
                <img src={image} alt={model}/>
                <div className="content">
                    <h2>{model}</h2>
                    <p>Rs.{price}</p>
                    <h4>SKU: {id}</h4>
                </div>
                <div>
                    <button type="button" className="cart-btn amount-btn" onClick={() => {increaseAmount(id, "", which)}}><FaAngleUp/></button>
                    <p className="item-amount">{amount}</p>
                    <button type="button" className="cart-btn amount-btn" onClick={() => {decreaseAmount(id, '', which)}}><FaAngleDown/></button>
                </div>
                <div className="remove-item-btn">
                    <button type="button" className="cart-btn amount-btn" onClick={() => {removeItem(id, '', which)}}><FaTimes/></button>
                </div>
            </div>
        </>
    )
}
