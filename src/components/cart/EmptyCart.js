import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
    return (
        <div className="section">
            <h2>Your cart is Empty!</h2>
            <Link to='/' className="btn btn-secondary">Explore Products!</Link>
        </div>
    )
}
