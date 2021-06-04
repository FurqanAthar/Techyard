import React from 'react'
import {useHistory} from 'react-router-dom'

export default function HeadphoneComparisonComponent({product1, product2}) {
    const history = useHistory()

    const gotoPorductPage = id => {
        history.push(`/headphones/${id}`)
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

                    {/* Playback */}
                    <p className="titles">Playback</p>
                    <div className="screen s">
                        <p>Playback: <span>{product1.features.playback}</span></p>
                    </div>
                    <div className="screen s">
                        <p>Playback: <span>{product2.features.playback}</span></p>
                    </div>

                    {/* Noise Cancellation */}
                    <p className="titles">Noise Cancellation</p>
                    <div className="screen s">
                        <p>Noise Cancellation: <span>{product1.features.noiseCancel}</span></p>
                    </div>
                    <div className="screen s">
                        <p>Noise Cancellation: <span>{product2.features.noiseCancel}</span></p>
                    </div>
                    
                    {/* Battery */}
                    <p className="titles">Battery</p>
                    <div className="screen s">
                        <p>Size: <span>{product1.features.battery}</span></p>
                    </div>
                    <div className="screen s">
                        <p>Size: <span>{product2.features.battery}</span></p>
                    </div>
                    
                    {/* Wireless */}
                    <p className="titles">Wireless</p>
                    <div className="screen s">
                        <p>Wireless: <span>{product1.features.wireless ? "Supported" : "--"}</span></p>
                    </div>
                    <div className="screen s">
                        <p>Wireless: <span>{product2.features.wireless ? "Supported" : "--"}</span></p>
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
