import React from 'react'
import SingleBannerCard from './singleBannerCard'
import accessoriesImage from '../assets/product images/powerbanks/apt100.png'
import mobileImage from '../assets/product images/mobile/note20bronze.png'
import laptopImage from '../assets/product images/laptops/inspiron14.png'
import headphoneImage from '../assets/product images/headphones/_059plus.png'

export default function SmallBannerCards() {
    const pages = ["accessories", "tablets", "mobiles", "laptops"]
    const images = [accessoriesImage, mobileImage, laptopImage, headphoneImage]
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
