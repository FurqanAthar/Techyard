import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faEye } from '@fortawesome/free-solid-svg-icons'

export default function ProductCard({singleProductData}) {
    const [data, setData] = React.useState(singleProductData)
    const [shortDescription, setShortDescription] = React.useState(data.description.substring(0,60) + `...`)
    const history = useHistory()

    const gotoDetail = () => {
        history.push(`/accessories/${data.id}`)
    }

    return (
            <div className="product-card">
                <div className="product-image-container">
                    <img src={data.image} alt={data.model}/>
                </div>
                <div className="product-content">
                    <h4 className="product-brand">{data.brand}</h4>
                    <h2 className="product-title">{data.model}</h2>
                    <h3 className="product-price">Rs.{data.price}</h3>
                </div>
                <p>{shortDescription}</p>
                <ul className="links">
                    <li><Link onClick = {gotoDetail}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Link></li>
                </ul>
            </div>
    )
}
