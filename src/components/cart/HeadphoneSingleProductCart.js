import React from 'react'
import {Alert} from 'react-bootstrap'
import {cartContext} from '../../context/CartContext'
import {headphoneContext} from '../../context/headphoneContext'
import {powerbankContext} from '../../context/powerbankContext'
import {checkStockWithoutColor} from '../../utilityFunctions/utils'
import {FaAngleUp, FaAngleDown, FaTimes} from "react-icons/fa";

export default function HeadphoneSingleProductCart({data}) {
    const {increaseAmount, decreaseAmount, removeItem} = React.useContext(cartContext)
    const {headphoneData} = React.useContext(headphoneContext)
    const {powerbankData} = React.useContext(powerbankContext)
    const {id, model, price, image, amount, which} = data
    const [error, setError] = React.useState(false)

    const checkStock = (d) => {
        if (d.which == `headphone`) {
            if (checkStockWithoutColor(d.id, d.amount, headphoneData)) {
                increaseAmount(id, "", which)
            }
            else {
                setError(true)
                setTimeout(() => setError(false), 3000)
            }
        }
        else if (d.which == `powerbank`) {
            if (checkStockWithoutColor(d.id, d.amount, powerbankData)) {
                increaseAmount(id, "", which)
            }
            else {
                setError(true)
                setTimeout(() => setError(false), 3000)
            }
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
                    <h4>SKU: {id}</h4>
                </div>
                <div>
                    <button type="button" className="cart-btn amount-btn" onClick={() => {checkStock(data)}}><FaAngleUp/></button>
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
