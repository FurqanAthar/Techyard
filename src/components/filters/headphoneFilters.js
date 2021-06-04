import React from 'react'

export default function HeadphoneFilters({data}) {
    const {filters, batterys, brands, updateFilters, clearFilters} = data
    const prices = [2500, 5000, 10000, 15000, 20000]
    return (
        <>
            <div className = "filter-section">
                <button className="btn btn-secondary" onClick={clearFilters}>Clear All Filters</button>
                <form className="filter-form">
                    {/* Single Filter Box */}
                    <div className="single-filter-box">
                        <h3 className="filter-box-title">Search</h3>
                        <div className="filters">
                            <input type="text" name="search" value = {filters.search} onChange={updateFilters}/>
                        </div>
                    </div>
                    {/* Single Filter Box */}
                    <div className="single-filter-box">
                        <h3 className="filter-box-title">Filter by Price</h3>
                        <div className="filters">
                            <label className="container">ALL
                                <input type="checkbox" checked={filters.price == "all"} name="price" value = "all" onChange={updateFilters}/>
                                <span className="checkmark"></span>
                            </label>
                            {
                                prices.length > 0 && prices.map((singlePrice, index) => {
                                    return (
                                        <label className="container">{`<`}{singlePrice}
                                            <input type="checkbox" checked={filters.price == singlePrice} name="price" value = {singlePrice} onChange={updateFilters}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    )
                                })
                            }
                            <label className="container">Others
                                <input type="checkbox" checked={filters.price == "other"} name="price" value = "other" onChange={updateFilters}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    {/* Single Filter Box */}
                    <div className="single-filter-box">
                        <h3 className="filter-box-title">Filter by Brand</h3>
                        <div className="filters">
                            <label className="container">ALL
                                <input type="checkbox" checked={filters.brand == "all"} name="brand" value = "all" onChange={updateFilters}/>
                                <span className="checkmark"></span>
                            </label>
                            {
                                brands.length > 0 && brands.map((singleBrand, index) => {
                                    return (
                                        <label className="container">{singleBrand.toUpperCase()}
                                            <input type="checkbox" checked={filters.brand == singleBrand} name="brand" value = {singleBrand} onChange={updateFilters}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* WireLess */}

                    <div className="single-filter-box">
                        <h3 className="filter-box-title">Filter by Connection</h3>
                        <div className="filters">
                            <label className="container">ALL
                                <input type="checkbox" checked={filters.wireless == "all"} name="wireless" value = "all" onChange={updateFilters}/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Wired
                                <input type="checkbox" checked={filters.wireless == "false"} name="wireless" value = "false" onChange={updateFilters}/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Wireless
                                <input type="checkbox" checked={filters.wireless == "true"} name="wireless" value = "true" onChange={updateFilters}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    {/* Single Filter Box */}
                    <div className="single-filter-box">
                        <h3 className="filter-box-title">Filter by Battery Capacity</h3>
                        <div className="filters">
                            <label className="container">ALL
                                <input type="checkbox" checked={filters.battery == "all"} name="battery" value = "all" onChange={updateFilters}/>
                                <span className="checkmark"></span>
                            </label>
                            {
                                batterys.length > 0 && batterys.map((singleBattery, index) => {
                                    return (
                                        <label className="container">{singleBattery}
                                            <input type="checkbox" checked={filters.battery == singleBattery} name="battery" value = {singleBattery} onChange={updateFilters}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
