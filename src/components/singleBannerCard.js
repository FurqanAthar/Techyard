import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleBannerCard({title, image}) {
    return (
        <>
            <div className="banner-card">
                <Link to = {`/${title}`}>
                    <img src={image} alt={title}/>
                </Link>
                <h3>{title.toUpperCase()}</h3>
            </div>
        </>
    )
}
