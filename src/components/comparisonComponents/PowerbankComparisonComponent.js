import React from 'react'
import {useHistory} from 'react-router-dom'

export default function PowerbankComparisonComponent({product1, product2}) {
    const history = useHistory()

    const gotoPorductPage = id => {
        history.push(`/accessories/${id}`)
    }
    return (
        <>
            <div className="grid-layout2 compareProducts">
                <div className="one-property-container">
                    {/* Models */}
                    <h1 className="cp-title s">{product1.model}</h1>
                    <h1 className="cp-title s">{product2.model}</h1>
                    
                    {/* Images */}
                    <div className="s image-container">
                        <img src={product1.image} alt={product1.model} className="cp-image"/>
                    </div>
                    <div className="s image-container">
                        <img src={product2.image} alt={product2.model} className="cp-image"/>
                    </div>

                    {/* Brands */}
                    <p className="cp-brand s">{product1.brand.toUpperCase()}</p>
                    <p className="cp-brand s">{product2.brand.toUpperCase()}</p>

                    {/* Price */}
                    <p className="titles">Price</p>
                    <div className="screen s">
                        <p>Price: <span>Rs.{product1.price}</span></p>
                    </div>
                    <div className="screen s">
                        <p>Price: <span>Rs.{product2.price}</span></p>
                    </div>

                    {/* Dimension */}
                    <p className="titles">Dimension</p>
                    <div className="screen s">
                        <p>Dimension: <span>{product1.features.dimensions}</span></p>
                    </div>
                    <div className="screen s">
                        <p>Dimension: <span>{product2.features.dimensions}</span></p>
                    </div>

                    {/* Capacity */}
                    <p className="titles">Capacity</p>
                    <div className="screen s">
                        <p>Capacity: <span>{product1.features.capacity}</span></p>
                    </div>
                    <div className="screen s">
                        <p>Capacity: <span>{product2.features.capacity}</span></p>
                    </div>
                    
                    {/* Wattage */}
                    <p className="titles">Wattage</p>
                    <div className="screen s">
                        <p>Wattage: <span>{product1.features.wattage}</span></p>
                    </div>
                    <div className="screen s">
                        <p>Wattage: <span>{product2.features.wattage}</span></p>
                    </div>
                    
                    {/* input */}
                    <p className="titles">Input</p>
                    <div className="screen s">
                        <p>Input: <span>{product1.features.input}</span></p>
                    </div>
                    <div className="screen s">
                        <p>Input: <span>{product2.features.input}</span></p>
                    </div>
                    
                    {/* output */}
                    <p className="titles">Output</p>
                    <div className="screen s">
                        <p>Output: <span>{product1.features.output}</span></p>
                    </div>
                    <div className="screen s">
                        <p>Output: <span>{product2.features.output}</span></p>
                    </div>
                    
                    {/* Add to cart */}
                    <div className="s">
                        <button className="btn btn-secondary" onClick={()=>gotoPorductPage(product1.id)}>View!</button>
                    </div>
                    <div className="s">
                        <button className="btn btn-secondary" onClick={()=>gotoPorductPage(product2.id)}>View!</button>
                    </div>
                </div>
            </div>
        </>
    );
}
