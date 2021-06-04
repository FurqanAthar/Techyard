import React from 'react'


export default function Banner({children, title, info, image, subtitle}) {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>{title}</h1>
                <p>{info}</p>
                {
                    subtitle && <h3>Coming Soon, Register Now!</h3>
                }
                {children}
            </div>
            <div className="banner-image">
                <img src={image} alt="banner"/>
            </div>
        </div>
    )
}
