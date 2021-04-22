import React from 'react'

export default function OrderProductCard({data}) {
    return (
        <>
            <div className="cart-section">
                <div className="order-product-item">
                    <img src={data.image} alt={data.model}/>
                    <div className="content">
                        <h2>{data.model}</h2>
                        <p>Rs.{data.price}</p>
                        <h4 className="item-amount">Amount: {data.amount}</h4>
                        {
                            data.which === `mobile` && <p>Color: {data.color}</p>
                        }
                    </div>
                    <h4>Category: {data.which.toUpperCase()}</h4>
                </div>
            </div>
        </>
    )
}
