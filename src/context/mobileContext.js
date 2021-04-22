import React from 'react'
import {addMobileContext} from '../admin/context/AddMobileContext'
import {paginateProducts} from '../utilityFunctions/utils'

export const mobileContext = React.createContext();

export default function MobileContextProvider({children}) {
    const {mobileData} = React.useContext(addMobileContext)
    // const [mobileData, setMobileData] = React.useState(data);
    const [sortedProducts, setSortedProducts] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [filters, setFilters] = React.useState({
        price : "all",
        ram : "all",
        rom : "all",
        battery : "all",
        chargingType : "all",
        color : "all",
        brand: "all",
        search : ""
    })
    const [brands, setBrands] = React.useState([])
    const [roms, setRoms] = React.useState([])
    const [rams, setRams] = React.useState([])
    const [batterys, setBatterys] = React.useState([])
    const [chargingTypes, setChargingTypes] = React.useState([])
    const [allColors, setAllColors] = React.useState([])

    // For Pagination of Products and Setting Unique Attribute Arrays
    React.useEffect(() => {
        setSortedProducts(paginateProducts(mobileData));
        mobileData.map((singleMobile, index) => {
            singleMobile.colors.forEach((singleColor) => {
                setAllColors((prev) => ([...prev, singleColor.colorCode]))
            })
            setBrands((prev) => ([...prev, singleMobile.brand.toLowerCase()]))
            setRoms((prev) => ([...prev, singleMobile.features.rom]))
            setRams((prev) => ([...prev, singleMobile.features.ram]))
            setBatterys((prev) => ([...prev, singleMobile.features.battery]))
            setChargingTypes((prev) => ([...prev, singleMobile.features.charging.type]))
        })
    }, [mobileData])

    // For applying filters
    React.useEffect(() => {
        let newProducts = [...mobileData]
        const {brand, rom, ram, battery, chargingType, price, search} = filters

        if (brand !== "all") {
            newProducts = newProducts.filter(item => item.brand.toLowerCase() == brand)
        }
        if (rom !== "all") {
            newProducts = newProducts.filter(item => item.features.rom == rom)
        }
        if (ram !== "all") {
            newProducts = newProducts.filter(item => item.features.ram == ram)
        }
        if (battery !== "all") {
            newProducts = newProducts.filter(item => item.features.battery == battery)
        }
        if (chargingType !== "all") {
            newProducts = newProducts.filter(item => item.features.charging.type == chargingType)
        }
        if (price !== "all") {
            if (price !== "other") {
                newProducts = newProducts.filter(item => item.price <= price)
            }
            else {
                newProducts = newProducts.filter(item => item.price > 100000)
            }
        }
        if (search !== "") {
            newProducts = newProducts.filter(item => {
                if (item.model.toLowerCase().includes(search.toLowerCase()) || item.brand.toLowerCase().includes(search.toLowerCase())) {
                    return item
                }
            })
        }
        setPage(0)
        setSortedProducts(paginateProducts(newProducts))
    }, [mobileData, filters])

    const changePage = (index) => {
        setPage(index)
    }
    const clearFilters = () => {
        let filtersCopy = {
            price : "all",
            ram : "all",
            rom : "all",
            battery : "all",
            chargingType : "all",
            color : "all",
            brand: "all",
            search : ""
        }
        setFilters({...filtersCopy})
    }
    const updateFilters = (e) => {
        const type = e.target.type
        const filter = e.target.name
        const value = e.target.value
        let filtersCopy = filters

        if (filter == `brand`) {
            filtersCopy.brand = value
        }
        else if (filter == `rom`) {
            filtersCopy.rom = value
        }
        else if (filter == `ram`) {
            filtersCopy.ram = value
        }
        else if (filter == `battery`) {
            filtersCopy.battery = value
        }
        else if (filter == `chargingType`) {
            filtersCopy.chargingType = value
        }
        else if (filter == `price`) {
            filtersCopy.price = value
        }
        else if (filter == `search`) {
            filtersCopy.search = value
        }
        setFilters({...filtersCopy})
    }
    return (
        <mobileContext.Provider value = {{mobileData, sortedProducts, page, changePage, filters, roms, rams, allColors, batterys, chargingTypes, brands, updateFilters, clearFilters}}>
            {children}
        </mobileContext.Provider>
    )
}
