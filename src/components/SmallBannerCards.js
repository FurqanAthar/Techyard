import React from 'react'
import SingleBannerCard from './singleBannerCard'
import accessoriesImage from '../assets/banner images/powerbank/apt100.png'
import mobileImage from '../assets/banner images/mobile/mobileBanner.png'
import headphoneImage from '../assets/banner images/headphone/_059plus.png'

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
