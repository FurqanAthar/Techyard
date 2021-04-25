import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/banner'
import Navbar from '../components/navbar'
import {useHistory} from 'react-router-dom'
import ProductList from '../components/productList'
import { mobileContext } from '../context/mobileContext'
import {headphoneContext} from '../context/headphoneContext'
import {powerbankContext} from '../context/powerbankContext'
import SmallBannerCards from '../components/SmallBannerCards'
import {comingSoonContext} from '../context/comingSoonContext'
import bannerImage from '../assets/banner images/home/homebanner.png'
import PowerbankProductList from '../components/powerbanks/productList'
import HeadphoneProductList from '../components/headphones/productList'

export default function Home() {
    const {comingSoonData} = React.useContext(comingSoonContext)
    const {powerbankData} = React.useContext(powerbankContext)
    const {headphoneData} = React.useContext(headphoneContext)
    const {mobileData} = React.useContext(mobileContext)
    const history = useHistory()
    let limitedPowerbankData = []
    let limitedHeadphoneData = []
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
    if (headphoneData.length > 0) {
        if (headphoneData.length > 4) {
            for (var i=0; i<4; i++) {
                limitedHeadphoneData.push(headphoneData[i])
            }
        }
        else {
            limitedHeadphoneData = [...headphoneData]
        }
    }
    if (powerbankData.length > 0) {
        if (powerbankData.length > 4) {
            for (var i=0; i<4; i++) {
                limitedPowerbankData.push(powerbankData[i])
            }
        }
        else {
            limitedPowerbankData = [...powerbankData]
        }
    }

    return (
        <div>
            <Navbar/>
            <Banner image={comingSoonData ? comingSoonData.image : bannerImage} title = {comingSoonData ? comingSoonData.title : "Samsung S21"} subtitle = "Coming Soon!" info = {comingSoonData ? comingSoonData.description : "Innovative, Effective and Afordable!"}>
                <Link to = '/register' className = "btn btn-primary"> Register! </Link>
                <Link to = '/mobiles' className = "btn btn-secondary"> See Other Products </Link>
            </Banner>
            <SmallBannerCards/>
            <div className="section">
                <h2>MOBILES</h2>
                {
                    limitedMobileData.length > 0 ? <ProductList products = {limitedMobileData}></ProductList> : <p>Loading...</p>
                }
                <button className="btn btn-primary" onClick={()=>history.push('/mobiles')}>See More!</button>
            </div>
            <div className="section">
                <h2>HEADPHONES</h2>
                {
                    limitedHeadphoneData.length > 0 ? <HeadphoneProductList products = {limitedHeadphoneData}></HeadphoneProductList> : <p>Loading...</p>
                }
                <button className="btn btn-primary" onClick={()=>history.push('/headphones')}>See More!</button>
            </div>
            <div className="section">
                <h2>POWERBANKS</h2>
                {
                    limitedPowerbankData.length > 0 ? <PowerbankProductList products = {limitedPowerbankData}></PowerbankProductList> : <p>Loading...</p>
                }
                <button className="btn btn-primary" onClick={()=>history.push('/accessories')}>See More!</button>
            </div>
        </div>
    )
}
