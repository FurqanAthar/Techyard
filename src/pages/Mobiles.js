import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/banner'
import Navbar from '../components/navbar'
import {mobileContext} from '../context/mobileContext'
import {getAllUnique} from '../utilityFunctions/utils'
import MobileFilters from '../components/filters/mobileFilters'
import PagenatedProducts from '../components/pagenatedProducts'
import mobileBannerImage from '../assets/banner images/mobile/mobileBanner2.png'

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
            <Banner image={mobileBannerImage} title = "Compare Mobiles" info = "Get Ideas about how you want your next phone to be!">
                <Link to = '/mobilecomparison' className = "btn btn-primary">Compare!</Link>
                <a href = '#mobiles' className = "btn btn-secondary"> Checkout! </a>
            </Banner>
            <div id="mobiles" className="filtration-and-products">
                <MobileFilters data = {{filters, roms, rams, allColors, batterys, chargingTypes, brands, updateFilters, clearFilters}}/>
                <PagenatedProducts data = {{sortedProducts, page, changePage}}></PagenatedProducts>
            </div>
        </div>
    )
}
