import React from 'react'
import ProductCard from './productCard'

export default function ProductList({products}) {
    return (
        <div className="section">
            <div className="products-center">
                {
                    products.map((singleProduct, index) => {
                        return <ProductCard singleProductData = {singleProduct} key = {singleProduct.id}></ProductCard>
                    })
                }
            </div>
        </div>
    )
}
