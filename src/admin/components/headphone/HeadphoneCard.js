import React from 'react'
import {FaTimes} from "react-icons/fa";
import {useHistory} from 'react-router-dom'
import {addHeadphoneContext} from '../../context/AddHeadphoneContext'

export default function HeadphoneCard({id, model, price, image}) {
    const {removeHeadphone} = React.useContext(addHeadphoneContext)
    const history = useHistory()
    return (
        <div className="cart-item">
            <img src={image} alt={model}/>
            <div className="content">
                <h2>{model}</h2>
                <p>Rs.{price}</p>
            </div>
            <div>
                <button className="btn btn-secondary" onClick={()=>{history.push(`/editheadphone/${id}`)}}>Edit</button>
            </div>
            <div className="remove-item-btn">
                <button type="button" className="cart-btn amount-btn" onClick={()=>removeHeadphone(id)}><FaTimes/></button>
            </div>
        </div>
    )
}
