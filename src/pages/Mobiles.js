import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/banner'
import mobileBannerImage from '../assets/banner images/mobile/mobileBanner.png'
import PagenatedProducts from '../components/pagenatedProducts'
import {mobileContext} from '../context/mobileContext'
import MobileFilters from '../components/filters/mobileFilters'
import {getAllUnique} from '../utilityFunctions/utils'

export default function Mobiles() {
    let {sortedProducts, page, changePage, filters, roms, rams, allColors, batterys, chargingTypes, brands, updateFilters, clearFilters} = React.useContext(mobileContext)
    roms = getAllUnique(roms)
    rams = getAllUnique(rams)
    allColors = getAllUnique(allColors)
    batterys = getAllUnique(batterys)
    chargingTypes = getAllUnique(chargingTypes)
    brands = getAllUnique(brands)
    return (
        <div>
            <Banner image={mobileBannerImage} title = "Samsung S Series" info = "Innovative, Amazing and Efficient">
                <Link to = '/' className = "btn btn-primary">Checkout!</Link>
                <Link to = '/' className = "btn btn-secondary"> Add to Cart! </Link>
            </Banner>
            <div className="filtration-and-products">
                <MobileFilters data = {{filters, roms, rams, allColors, batterys, chargingTypes, brands, updateFilters, clearFilters}}/>
                <PagenatedProducts data = {{sortedProducts, page, changePage}}></PagenatedProducts>
            </div>
        </div>
    )
}
