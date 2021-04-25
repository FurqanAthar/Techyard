import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleBannerCard({title, image}) {
    return (
        <Link to = {`/${title}`} style={{
                background: `url(${image})`,
                backgroundSize: `cover`,
            }} >
            <div className={`banner-card ${title}`}>
                <h3>{title}</h3>
            </div>
        </Link>
    )
}
