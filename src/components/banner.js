import React from 'react'


export default function Banner({children, title, info, image}) {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>{title}</h1>
                <p>{info}</p>
                {children}
            </div>
            <div className="banner-image">
                <img src={image} alt="banner"/>
            </div>
        </div>
    )
}
