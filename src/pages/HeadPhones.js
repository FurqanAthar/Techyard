import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/banner'
import headphoneBannerImage from '../assets/banner images/headphone/_059plus.png'
import {headphoneContext} from '../context/headphoneContext'
import PaginatedProducts from '../components/headphones/paginatedProducts'
import HeadphoneFilters from '../components/filters/headphoneFilters'
import {getAllUnique} from '../utilityFunctions/utils'
import Navbar from '../components/navbar'

export default function HeadPhones() {
    let {sortedProducts, page, changePage, batterys, brands, filters, updateFilters, clearFilters} = React.useContext(headphoneContext)
    batterys = getAllUnique(batterys)
    brands = getAllUnique(brands)
    return (
        <div>
            <Navbar/>
            <Banner image={headphoneBannerImage} title = "Compare Headphones" info = "Innovative, Amazing and Efficient">
                <Link to = '/headphonecomparison' className = "btn btn-primary">Compare!</Link>
                <a href = '#headphones' className = "btn btn-secondary"> Checkout! </a>
            </Banner>
            <div id="headphones" className="filtration-and-products">
                <HeadphoneFilters data = {{filters, batterys, brands, updateFilters, clearFilters}}/>
                <PaginatedProducts data = {{sortedProducts, page, changePage}}></PaginatedProducts>
            </div>
        </div>
    )
}
