import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/banner'
import powerbankBannerImage from '../assets/banner images/powerbank/apt100.png'
import { powerbankContext } from '../context/powerbankContext'
import PaginatedProducts from '../components/powerbanks/paginatedProducts'
import PowerbankFilters from '../components/filters/powerbankFilter'
import {getAllUnique} from '../utilityFunctions/utils'
import Navbar from '../components/navbar'

export default function Accessories() {
    let {sortedProducts, page, changePage, capacities, brands, filters, updateFilters, clearFilters} = React.useContext(powerbankContext)
    capacities = getAllUnique(capacities)
    brands = getAllUnique(brands)
    return (
        <div>
            <Navbar/>
            <Banner image={powerbankBannerImage} title = "Compare Powerbanks" info = "Compare, Select and Buy...">
                <Link to = '/powerbankcomparison' className = "btn btn-primary">Checkout!</Link>
                <Link to = '/powerbankcomparison' className = "btn btn-secondary"> Add to Cart! </Link>
            </Banner>
            <div className="filtration-and-products">
                <PowerbankFilters data = {{filters, capacities, brands, updateFilters, clearFilters}}/>
                <PaginatedProducts data = {{sortedProducts, page, changePage}}></PaginatedProducts>
            </div>
        </div>
    )
}
