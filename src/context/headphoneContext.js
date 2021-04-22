import React from 'react'
import {addHeadphoneContext} from '../admin/context/AddHeadphoneContext'
import {paginateProducts} from '../utilityFunctions/utils'

export const headphoneContext = React.createContext();

export default function HeadphoneContextProvider({children}) {
    const {headphoneData} = React.useContext(addHeadphoneContext)
    const [sortedProducts, setSortedProducts] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [filters, setFilters] = React.useState({
        price : "all",
        battery : "all",
        brand: "all",
        search : "",
        wireless: "all"
    })
    const [brands, setBrands] = React.useState([])
    const [batterys, setBatterys] = React.useState([])
    
    // For Pagination of Products and Setting Unique Attribute Arrays
    React.useEffect(() => {
        setSortedProducts(paginateProducts(headphoneData));
        headphoneData.map((singleHeadphone, index) => {
            setBrands((prev) => ([...prev, singleHeadphone.brand.toLowerCase()]))
            setBatterys((prev) => ([...prev, singleHeadphone.features.battery]))
        })
    }, [headphoneData])

    // For applying filters
    React.useEffect(() => {
        let newProducts = [...headphoneData]
        const {brand, battery, price, search, wireless} = filters

        if (brand !== "all") {
            newProducts = newProducts.filter(item => item.brand.toLowerCase() == brand)
        }
        if (battery !== "all") {
            newProducts = newProducts.filter(item => item.features.battery == battery)
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
        if (wireless !== "all") {
            let check = 0
            if (wireless == `true`) {
                check = 1
            }
            newProducts = newProducts.filter(item => {
                if (item.features.wireless == check) {
                    return item
                }
            })
        }
        setPage(0)
        setSortedProducts(paginateProducts(newProducts))
    }, [headphoneData, filters])

    const changePage = (index) => {
        setPage(index)
    }
    const clearFilters = () => {
        let filtersCopy = {
            price : "all",
            battery : "all",
            brand: "all",
            search : "",
            wireless: "all"
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
        else if (filter == `battery`) {
            filtersCopy.battery = value
        }
        else if (filter == `price`) {
            filtersCopy.price = value
        }
        else if (filter == `search`) {
            filtersCopy.search = value
        }
        else if (filter == `wireless`) {
            filtersCopy.wireless = value
        }
        setFilters({...filtersCopy})
    }
    return (
        <headphoneContext.Provider value = {{headphoneData, sortedProducts, page, changePage, filters, batterys, brands, updateFilters, clearFilters}}>
            {children}
        </headphoneContext.Provider>
    )
}
