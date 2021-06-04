import React from 'react'
import SingleBannerCard from './singleBannerCard'
import mobileImage from '../assets/banner images/cellphones2.jpg'
import headphoneImage from '../assets/banner images/headphones2.jpg'
import accessoriesImage from '../assets/banner images/powerbanks2.jpg'

export default function SmallBannerCards() {
    const pages = ["mobiles", "headphones", "accessories" ]
    const images = [mobileImage, headphoneImage, accessoriesImage]
    return (
        <div className="banner-cards section">
            {
                pages.map((p, index) => {
                    return <SingleBannerCard title = {p} image = {images[index]} key = {index}/>
                })
            }
        </div>
    )
}
