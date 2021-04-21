import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/banner'
import mobileBannerImage from '../assets/banner images/mobile/mobileBanner.png'
import PagenatedProducts from '../components/pagenatedProducts'
import {mobileContext} from '../context/mobileContext'
import MobileFilters from '../components/filters/mobileFilters'
import {getAllUnique} from '../utilityFunctions/utils'
import Navbar from '../components/navbar'

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
            <Navbar/>
            <Banner image={mobileBannerImage} title = "Compare Mobile Phones" info = "Get Ideas about how you want your next phone to be!">
                <Link to = '/mobilecomparison' className = "btn btn-primary">Compare!</Link>
                <Link to = '/mobilecomparison' className = "btn btn-secondary"> Checkout! </Link>
            </Banner>
            <div className="filtration-and-products">
                <MobileFilters data = {{filters, roms, rams, allColors, batterys, chargingTypes, brands, updateFilters, clearFilters}}/>
                <PagenatedProducts data = {{sortedProducts, page, changePage}}></PagenatedProducts>
            </div>
        </div>
    )
}
