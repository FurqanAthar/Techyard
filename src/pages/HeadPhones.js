import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/banner'
import mobileBannerImage from '../assets/banner images/mobile/mobileBanner.png'
import {headphoneContext} from '../context/headphoneContext'
import PaginatedProducts from '../components/headphones/paginatedProducts'
import HeadphoneFilters from '../components/filters/headphoneFilters'
import {getAllUnique} from '../utilityFunctions/utils'

export default function HeadPhones() {
    let {sortedProducts, page, changePage, batterys, brands, filters, updateFilters, clearFilters} = React.useContext(headphoneContext)
    batterys = getAllUnique(batterys)
    brands = getAllUnique(brands)
    return (
        <div>
            <Banner image={mobileBannerImage} title = "Samsung S Series" info = "Innovative, Amazing and Efficient">
                <Link to = '/' className = "btn btn-primary">Checkout!</Link>
                <Link to = '/' className = "btn btn-secondary"> Add to Cart! </Link>
            </Banner>
            <div className="filtration-and-products">
                <HeadphoneFilters data = {{filters, batterys, brands, updateFilters, clearFilters}}/>
                <PaginatedProducts data = {{sortedProducts, page, changePage}}></PaginatedProducts>
            </div>
        </div>
    )
}
