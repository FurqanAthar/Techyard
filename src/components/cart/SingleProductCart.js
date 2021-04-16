import React from 'react'
import {Alert} from 'react-bootstrap'
import {cartContext} from '../../context/CartContext'
import {mobileContext} from '../../context/mobileContext'
import {checkStockWithColor} from '../../utilityFunctions/utils'
import {FaAngleUp, FaAngleDown, FaTimes} from "react-icons/fa";

export default function SingleProductCart({data}) {
    const {increaseAmount, decreaseAmount, removeItem} = React.useContext(cartContext)
    const {id, model, price, image, color, amount, which} = data
    const {mobileData} = React.useContext(mobileContext)
    const [error, setError] = React.useState(false)

    const checkStock = (d) => {
        if (checkStockWithColor(d.id, d.color, d.amount, mobileData)) {
            increaseAmount(id, color, which)
        }
        else {
            setError(true)
            setTimeout(() => setError(false), 3000)
        }
    }
    return (
        <>
            {
                error && <Alert variant="danger">No More in Stock!</Alert>
            }
            <div className="cart-item">
                <img src={image} alt={model}/>
                <div className="content">
                    <h2>{model}</h2>
                    <p>Rs.{price}</p>
                    <h4>Color: {color}</h4>
                </div>
                <div>
                    <button type="button" className="cart-btn amount-btn" onClick={() => checkStock(data)}><FaAngleUp/></button>
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
