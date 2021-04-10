import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faEye } from '@fortawesome/free-solid-svg-icons'

export default function ProductCard({singleProductData}) {
    const [data, setData] = React.useState(singleProductData)
    const [shortDescription, setShortDescription] = React.useState(data.description.substring(0,60) + `...`)

    const handle = (e) => {
        const color = e.target.attributes.id.value
        const copyData = data
        let colorNode = {}
        data.colors.map((colorData, index) => {
            if (colorData.colorCode == color) {
                copyData.colors.splice(index, 1)
                setData(copyData)
                colorNode = colorData
                return colorData
            }
        })
        copyData.colors.unshift(colorNode)
        setData({...copyData})
    }

    return (
            <div className="product-card">
                <div className="product-image-container">
                    {
                        data.colors.map((singleImage, index) => {
                            return (
                                <img src={singleImage.image} alt={`img${index}`}/>
                            )
                        })
                    }
                </div>
                <div className="product-content">
                    <h4 className="product-brand">{data.brand}</h4>
                    <h2 className="product-title">{data.model}</h2>
                    <h3 className="product-price">Rs.{data.price}</h3>
                </div>
                <div className="color-box">
                    {
                        data.colors.map((singleColor, index) => {
                            return <span style={{backgroundColor: singleColor.colorCode}} id={singleColor.colorCode} onClick = {handle}></span>
                        })
                    }
                </div>
                <p>{shortDescription}</p>
                <ul className="links">
                    <li><FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon></li>
                    <li><Link to = {`mobiles/${data.id}`}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Link></li>
                </ul>
            </div>
    )
}
