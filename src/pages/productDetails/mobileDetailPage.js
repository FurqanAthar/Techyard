import React from 'react'
import { Alert } from "react-bootstrap"
import { Link } from 'react-router-dom'
import {cartContext} from '../../context/CartContext'
import {useParams, useHistory} from "react-router-dom";
import ProductList from '../../components/productList';
import {mobileContext} from '../../context/mobileContext'

export default function MobileDetailPage() {
    const [reviewsButton, setReviewsButton] = React.useState(false)
    const [featureButton, setFeatureButton] = React.useState(true)
    const [imageIndex, setImageIndex] = React.useState(0)
    const {mobileData} = React.useContext(mobileContext)
    const {addToCart} = React.useContext(cartContext)
    const [reviews, setReviews] = React.useState([])
    const [error, setError] = React.useState(false)
    const history = useHistory();
    const {id} = useParams();
    let countRelatedProducts = 0
    let relatedProducts = []
    let product = {}
    
    if (mobileData.length === 0) {
        return <h1>Loading...</h1>
    }
    else {
        // getting product having id same as in URL
        mobileData.forEach(single => {
            if (single.id == id) {
                product = single
            }
        });
        const {model, price, colors} = product
        // getting related products
        mobileData.forEach(single => {
            if (single.brand.toLowerCase() === product.brand.toLowerCase() && countRelatedProducts <= 4) {
                countRelatedProducts++
                relatedProducts.push(single)
            }
        })
        // handling image to showcase
        const handleShowcase = (e) => {
            setImageIndex(parseInt(e.target.attributes.value.nodeValue))
        }
        // Handling feature and review buttons 
        const handleFeatureButton = () => {
            if (reviewsButton) {
                setFeatureButton(reviewsButton)
                setReviewsButton(!reviewsButton)
            }
        }
        const handleReviewsButton = () => {
            if (featureButton) {
                setReviewsButton(featureButton)
                setFeatureButton(!featureButton)
            }
        }
        const redirect = () => {
            history.push('/mycart')
        }
        const checkStock = () => {
            if (product.colors[imageIndex].stock > 0) {
                addToCart({id, model, price, image:colors[imageIndex].image, color:colors[imageIndex].name, which:`mobile`})
                redirect()
            }
            else {
                setError(true)
                setTimeout(() => setError(false), 3000)
            }
        }
        // getting all images
        const newImages = product.colors.map((item, index) => {return item.image})
        return (
            <div>
                <div class = "card-wrapper section">
                    {/* <!-- card left --> */}
                    <div class = "product-imgs">
                        <div className="showcase-image">
                            <img src={newImages[imageIndex]} alt={product.model}/>
                        </div>
                        <div className="other-images">
                            {
                                newImages.map((image, index) => {
                                    return <img src={image} alt={product.model} value={index} onClick={handleShowcase}/>
                                })
                            }
                        </div>
                    </div>
                    {/* <!-- card right --> */}
                    <div class = "product-content">
                        <h4 className = "breadcrumbs"><Link to = '/'>Home</Link> / <Link to = '/mobiles'>Mobiles</Link> / {product.model}</h4>
                        <h1 class = "product-title">{product.model}</h1>
                        <h2 class = "product-price">Rs.{product.price}</h2>
                        <h4>Brand: {product.brand.toUpperCase()}</h4>
                        
                        <div class = "product-detail">
                            <h3>Product Description: </h3>
                            <p>{product.description}</p>
                            <p className="stock">
                                <span className="stock-title">Stock:  </span>
                                {product.colors[imageIndex].stock} 
                            </p>
                            <div className="colors-detail">
                                {
                                    product.colors.map((item, index) => {
                                        return (
                                            <div className="single-color-detail" key = {index}>
                                                <div className="colorCode-container">
                                                    <div className = "colorCode" style = {{backgroundColor: item.colorCode}} value = {index} onClick={handleShowcase}></div>
                                                </div>
                                                <h4 className="colorName">{item.name}</h4>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {
                            error && <Alert variant="danger">Out of Stock!</Alert>
                        }
                        <button className="btn btn-secondary" onClick = {checkStock}>Add to Cart</button>
                    </div>
                </div>
                <div className="complete-details section">
                    <div className="buttons">
                        <button className={`btn ${featureButton?`btn-secondary`:`btn-primary`}`} onClick = {handleFeatureButton}>Features</button>
                        <span>    </span>
                        <button className={`btn ${reviewsButton?`btn-secondary`:`btn-primary`}`} onClick = {handleReviewsButton}>Reviews</button>
                    </div>
                    {
                        featureButton && (
                            <div>
                                {/* RAM  */}
                                <div className="single-feature">
                                    <span className="feature-title">RAM: </span>
                                    <span>{product.features.ram}GB</span>
                                </div>
                                {/* ROM */}
                                <div className="single-feature">
                                    <span className="feature-title">ROM: </span>
                                    <span>{product.features.rom}GB</span>
                                </div>
                                {/* Camera */}
                                <div className="single-feature">
                                    <span className="feature-title">Camera: </span>
                                    <div>
                                        <span>Main - {product.features.camera.mainCamera}MP</span>
                                    </div>
                                    <div>
                                        <span>Front - {product.features.camera.frontCamera}MP</span>
                                    </div>
                                </div>
                                {/* FiveG */}
                                {
                                    product.features.fiveG && (
                                        <div className="single-feature">
                                            <span className="feature-title">5G: </span>
                                            <span>Supported</span>
                                        </div>
                                    )
                                }
                                {/* Processor */}
                                <div className="single-feature">
                                    <span className="feature-title">Processor: </span>
                                    <span>{product.features.processor}</span>
                                </div>
                                {/* GPU */}
                                <div className="single-feature">
                                    <span className="feature-title">GPU: </span>
                                    <span>{product.features.gpu}</span>
                                </div>
                                {/* Screnn */}
                                <div className="single-feature">
                                    <span className="feature-title">Screen: </span>
                                    <div>
                                        <span>Size - {product.features.screen.size} Inch</span>
                                    </div>
                                    <div>
                                        <span>Type - {product.features.screen.type}</span>
                                    </div>
                                    <div>
                                        <span>Resolution - {product.features.screen.resolution}</span>
                                    </div>
                                </div>
                                {/* Battery */}
                                <div className="single-feature">
                                    <span className="feature-title">Battery: </span>
                                    <span>{product.features.battery}mAh</span>
                                </div>
                                {/* Charging */}
                                <div className="single-feature">
                                    <span className="feature-title">Charging: </span>
                                    <div>
                                        <span>Type - {product.features.charging.type}</span>
                                    </div>
                                    <div>
                                        <span>Wattage - {product.features.charging.wattage}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        reviewsButton && (
                            <p>No Reviews to Show</p>
                        )
                    }
                </div>
                {
                    relatedProducts && (
                        <div className="related-products section">
                            <div className="btn btn-secondary">Related Products</div>
                            <ProductList products = {relatedProducts}></ProductList>
                        </div>
                    )
                }
            </div>
        )
    }
}
