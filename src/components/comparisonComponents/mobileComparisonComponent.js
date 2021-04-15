import React from 'react'
import {useHistory} from 'react-router-dom'

export default function MobileCompareProducts({product1, product2}) {
    const [p1ImageIndex, setP1ImageIndex] = React.useState(0)
    const [p2ImageIndex, setP2ImageIndex] = React.useState(0)
    const history = useHistory()
    const p1Images = []
    const p2Images = []
    
    product1.colors.map(colorItem => {
        p1Images.push(colorItem.image)
    })
    product2.colors.map(colorItem => {
        p2Images.push(colorItem.image)
    })

    const handleP1Image = (index) => {
        setP1ImageIndex(index)
    }
    const handleP2Image = (index) => {
        setP2ImageIndex(index)
    }

    const gotoPorductPage = id => {
        history.push(`/mobiles/${id}`)
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
                        <img src={p1Images[p1ImageIndex]} alt={product1.model} className="cp-image"/>
                    </div>
                    <div className="s image-container">
                        <img src={p2Images[p2ImageIndex]} alt={product2.model} className="cp-image"/>
                    </div>
                    
                    {/* Colors */}
                    <p className="titles">color options</p>
                    <div className="colorOptionCircle s">
                        {
                            product1.colors.map((singleColorItem, index) => {
                                return (<div className="singleColor" key={index} style={{background: singleColorItem.colorCode}} onClick={()=>handleP1Image(index)}></div>);
                            })
                        }
                    </div>
                    <div className="colorOptionCircle s">
                        {
                            product2.colors.map((singleColorItem, index) => {
                                return (<div className="singleColor" key={index} style={{background: singleColorItem.colorCode}} onClick={()=>handleP2Image(index)}></div>);
                            })
                        }
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

                    {/* RAM */}
                    <p className="titles">RAM</p>
                    <div className="screen s">
                        <p>RAM: <span>{product1.features.ram}GB</span></p>
                    </div>
                    <div className="screen s">
                        <p>RAM: <span>{product2.features.ram}GB</span></p>
                    </div>

                    {/* ROM */}
                    <p className="titles">ROM</p>
                    <div className="screen s">
                        <p>ROM: <span>{product1.features.rom}GB</span></p>
                    </div>
                    <div className="screen s">
                        <p>ROM: <span>{product2.features.rom}GB</span></p>
                    </div>
                    
                    {/* Screen */}
                    <p className="titles">Screen</p>
                    <div className="screen s">
                        <p>Size: <span>{product1.features.screen.size}"</span></p>
                        <p>Type: <span>{product1.features.screen.type}</span></p>
                        <p>Resolution: <span>{product1.features.screen.resolution}</span></p>
                    </div>
                    <div className="screen s">
                        <p>Size: <span>{product2.features.screen.size}"</span></p>
                        <p>Type: <span>{product2.features.screen.type}</span></p>
                        <p>Resolution: <span>{product2.features.screen.resolution}</span></p>
                    </div>
                                        
                    {/* Battery */}
                    <p className="titles">Battery</p>
                    <div className="screen s">
                        <p>Battery: <span>{product1.features.battery}mAh</span></p>
                    </div>
                    <div className="screen s">
                        <p>Battery: <span>{product2.features.battery}mAh</span></p>
                    </div>
                    
                    {/* Charging */}
                    <p className="titles">Charging</p>
                    <div className="screen s">
                        <p>Type: <span>{product1.features.charging.type}</span></p>
                        <p>Wattage: <span>{product1.features.charging.wattage}</span></p>
                    </div>
                    <div className="screen s">
                        <p>Type: <span>{product2.features.charging.type}</span></p>
                        <p>Wattage: <span>{product2.features.charging.wattage}</span></p>
                    </div>
                    
                    {/* Processor */}
                    <p className="titles">Processor</p>
                    <div className="screen s">
                        <p>Processor: <span>{product1.features.processor}</span></p>
                    </div>
                    <div className="screen s">
                        <p>Processor: <span>{product2.features.processor}</span></p>
                    </div>
                    
                    {/* GPU */}
                    <p className="titles">GPU</p>
                    <div className="screen s">
                        <p>GPU: <span>{product1.features.gpu}</span></p>
                    </div>
                    <div className="screen s">
                        <p>GPU: <span>{product2.features.gpu}</span></p>
                    </div>
                    
                    {/* FiveG */}
                    <p className="titles">5G</p>
                    <div className="screen s">
                        <p>5G: <span>{product1.features.fiveG ? "Supported" : "--"}</span></p>
                    </div>
                    <div className="screen s">
                        <p>5G: <span>{product2.features.fiveG ? "Supported" : "--"}</span></p>
                    </div>
                    
                    {/* Camera */}
                    <p className="titles">Camera</p>
                    <div className="screen s">
                        <p>Main Camera: <span>{product1.features.camera.mainCamera}MP</span></p>
                        <p>Front Main: <span>{product1.features.camera.frontCamera}MP</span></p>
                    </div>
                    <div className="screen s">
                        <p>Main Camera: <span>{product2.features.camera.mainCamera}MP</span></p>
                        <p>Front Main: <span>{product2.features.camera.frontCamera}MP</span></p>
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
