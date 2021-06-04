import React from 'react'
import {addPowerbankContext} from '../admin/context/AddPowerbankContext'
import {paginateProducts} from '../utilityFunctions/utils'

export const powerbankContext = React.createContext();

export default function PowerbankContextProvider({children}) {
    const {powerbankData} = React.useContext(addPowerbankContext)
    const [sortedProducts, setSortedProducts] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [filters, setFilters] = React.useState({
        price : "all",
        capacity : "all",
        brand: "all",
        search : "",
    })
    const [brands, setBrands] = React.useState([])
    const [capacities, setCapacities] = React.useState([])
    
    // For Pagination of Products and Setting Unique Attribute Arrays
    React.useEffect(() => {
        setSortedProducts(paginateProducts(powerbankData));
        powerbankData.map((singlePowerbank, index) => {
            setBrands((prev) => ([...prev, singlePowerbank.brand.toLowerCase()]))
            setCapacities((prev) => ([...prev, singlePowerbank.features.capacity]))
        })
    }, [powerbankData])

    // For applying filters
    React.useEffect(() => {
        let newProducts = [...powerbankData]
        const {brand, capacity, price, search} = filters

        if (brand !== "all") {
            newProducts = newProducts.filter(item => item.brand.toLowerCase() == brand)
        }
        if (capacity !== "all") {
            newProducts = newProducts.filter(item => item.features.capacity == capacity)
        }
        if (price !== "all") {
            if (price !== "other") {
                newProducts = newProducts.filter(item => item.price <= price)
            }
            else {
                newProducts = newProducts.filter(item => item.price >= 15000)
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
    }, [powerbankData, filters])

    const changePage = (index) => {
        setPage(index)
    }
    const clearFilters = () => {
        let filtersCopy = {
            price : "all",
            capacity : "all",
            brand: "all",
            search : "",
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
        else if (filter == `capacity`) {
            filtersCopy.capacity = value
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
        <powerbankContext.Provider value = {{powerbankData, sortedProducts, page, changePage, filters, capacities, brands, updateFilters, clearFilters}}>
            {children}
        </powerbankContext.Provider>
    )
}
