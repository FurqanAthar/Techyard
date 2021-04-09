import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/banner'
import bannerImage from '../assets/banner images/home/homebanner.png'
import MobileContextProvider, { mobileContext } from '../context/mobileContext'
import ProductList from '../components/productList'

export default function Home() {
    const mobileContextTaken = React.useContext(mobileContext)
    return (
        <div>
            <Banner image={bannerImage} title = "Samsung S21" info = "The Samsung Galaxy S21 is a series of Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series.">
                <Link to = '/' className = "btn btn-primary"> See All! </Link>
                <Link to = '/' className = "btn btn-secondary"> Know More! </Link>
            </Banner>
            <ProductList products = {mobileContextTaken.mobileData}></ProductList>
        </div>
    )
}
