import React from 'react'
import {FaTimes} from "react-icons/fa";
import {useHistory} from 'react-router-dom'
import {addPowerbankContext} from '../../context/AddPowerbankContext'

export default function PowerbankCard({id, model, price, image}) {
    const {removePowerbank} = React.useContext(addPowerbankContext)
    const history = useHistory()
    return (
        <div className="cart-item">
            <img src={image} alt={model}/>
            <div className="content">
                <h2>{model}</h2>
                <p>Rs.{price}</p>
            </div>
            <div>
                <button className="btn btn-secondary" onClick={()=>{history.push(`/editpowerbank/${id}`)}}>Edit</button>
            </div>
            <div className="remove-item-btn">
                <button type="button" className="cart-btn amount-btn" onClick={()=>removePowerbank(id)}><FaTimes/></button>
            </div>
        </div>
    )
}
