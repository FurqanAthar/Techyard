import React from 'react'
import {useParams, useHistory} from "react-router-dom";
import ProductList from '../../components/headphones/productList';
import {headphoneContext} from '../../context/headphoneContext'
import { Link } from 'react-router-dom'
import {cartContext} from '../../context/CartContext'

export default function HeadphoneDetailPage() {
    const {id} = useParams();
    const history = useHistory();
    const {headphoneData} = React.useContext(headphoneContext)
    const {addToCart} = React.useContext(cartContext)
    const [reviews, setReviews] = React.useState([])
    const [featureButton, setFeatureButton] = React.useState(true)
    const [reviewsButton, setReviewsButton] = React.useState(false)
    let product = {}
    let relatedProducts = []
    let countRelatedProducts = 0
    
    if (headphoneData.length === 0) {
        return <h1>Loading...</h1>
    }
    else {
        // getting product having id same as in URL
        headphoneData.forEach(single => {
            if (single.id == id) {
                product = single
            }
        });
        const {model, price, stock, description, brand, features, image} = product
        // getting related products
        headphoneData.forEach(single => {
            if (single.brand.toLowerCase() === product.brand.toLowerCase() && countRelatedProducts <= 4) {
                countRelatedProducts++
                relatedProducts.push(single)
            }
        })
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
        return (
            <div>
                <div class = "card-wrapper section">
                    {/* <!-- card left --> */}
                    <div class = "product-imgs">
                        <div className="showcase-image">
                            <img src={image} alt={model}/>
                        </div>
                    </div>
                    {/* <!-- card right --> */}
                    <div class = "product-content">
                        <h4 className = "breadcrumbs"><Link to = '/'>Home</Link> / <Link to = '/headphones'>Headphones</Link> / {model}</h4>
                        <h1 class = "product-title">{model}</h1>
                        <h2 class = "product-price">Rs.{price}</h2>
                        <h4>Brand: {brand.toUpperCase()}</h4>
                        
                        <div class = "product-detail">
                            <h3>Product Description: </h3>
                            <p>{description}</p>
                            <p className="stock">
                                <span className="stock-title">Stock:  </span>
                                {stock}
                            </p>
                        </div>
                        <button className="btn btn-secondary" onClick = {() => {addToCart({id, model, price, image, which:`headphone`}); redirect()}}>Add to Cart</button>
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
                                {/* Playback */}
                                <div className="single-feature">
                                    <span className="feature-title">Playback: </span>
                                    <span>{features.playback}</span>
                                </div>
                                {/* Wireless */}
                                {
                                    features.wireless && (
                                        <div className="single-feature">
                                            <span className="feature-title">Wireless: </span>
                                            <span>True</span>
                                        </div>
                                    )
                                }
                                {/* Noise Cancelation */}
                                <div className="single-feature">
                                    <span className="feature-title">Noise Cancellation: </span>
                                    <span>{features.noiseCancel}</span>
                                </div>
                                {/* Battery */}
                                <div className="single-feature">
                                    <span className="feature-title">Battery: </span>
                                    <span>{features.battery}</span>
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