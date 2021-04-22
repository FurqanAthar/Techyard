import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/banner'
import bannerImage from '../assets/banner images/home/homebanner.png'
import { mobileContext } from '../context/mobileContext'
import ProductList from '../components/productList'
import Navbar from '../components/navbar'

export default function Home() {
    const {mobileData} = React.useContext(mobileContext)
    let limitedMobileData = []

    if (mobileData.length > 0) {
        if (mobileData.length > 4) {
            for (var i=0; i<4; i++) {
                limitedMobileData.push(mobileData[i])
            }
        }
        else {
            limitedMobileData = [...mobileData]
        }
    }
    return (
        <div>
            <Navbar/>
            <Banner image={bannerImage} title = "Samsung S21" info = "The Samsung Galaxy S21 is a series of Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series.">
                <Link to = '/mobiles' className = "btn btn-primary"> See All! </Link>
                <Link to = '/mobiles' className = "btn btn-secondary"> Know More! </Link>
            </Banner>
            {/* <SmallBannerCards/> */}
            <div className="section">
                <h2>MOBILES</h2>
                <ProductList products = {limitedMobileData}></ProductList>
            </div>
        </div>
    )
}
