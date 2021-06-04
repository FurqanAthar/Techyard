import React from 'react'
import {FaTimes} from "react-icons/fa";
import {useHistory} from 'react-router-dom'
import {addMobileContext} from '../../context/AddMobileContext'

export default function MobileCard({id, model, price, colors}) {
    const {removeMobile} = React.useContext(addMobileContext)
    const history = useHistory()
    return (
        <div className="cart-item">
            <img src={colors[0].image} alt={model}/>
            <div className="content">
                <h2>{model}</h2>
                <p>Rs.{price}</p>
            </div>
            <div>
                <button className="btn btn-secondary" onClick={()=>{history.push(`/editmobile/${id}`)}}>Edit</button>
            </div>
            <div className="remove-item-btn">
                <button type="button" className="cart-btn amount-btn" onClick={()=>removeMobile(id)}><FaTimes/></button>
            </div>
        </div>
    )
}
