import React from 'react'

export default function MobileFilters({data}) {
    const {filters, roms, rams, allColors, batterys, chargingTypes, brands, updateFilters} = data
    console.log(data)
    return (
        <div className = "filter-section">
            <form className="filter-form">
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
                {/* Single Filter Box */}
                <div className="single-filter-box">
                    <h3 className="filter-box-title">Filter by RAM</h3>
                    <div className="filters">
                        <label className="container">ALL
                            <input type="checkbox" checked={filters.ram == "all"} name="ram" value = "all" onChange={updateFilters}/>
                            <span className="checkmark"></span>
                        </label>
                        {
                            rams.length > 0 && rams.map((singleRam, index) => {
                                return (
                                    <label className="container">{singleRam}GB
                                        <input type="checkbox" checked={filters.ram == singleRam} name="ram" value = {singleRam} onChange={updateFilters}/>
                                        <span className="checkmark"></span>
                                    </label>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Single Filter Box */}
                <div className="single-filter-box">
                    <h3 className="filter-box-title">Filter by ROM</h3>
                    <div className="filters">
                        <label className="container">ALL
                            <input type="checkbox" checked={filters.rom == "all"} name="rom" value = "all" onChange={updateFilters}/>
                            <span className="checkmark"></span>
                        </label>
                        {
                            roms.length > 0 && roms.map((singleRom, index) => {
                                return (
                                    <label className="container">{singleRom}GB
                                        <input type="checkbox" checked={filters.rom == singleRom} name="rom" value = {singleRom} onChange={updateFilters}/>
                                        <span className="checkmark"></span>
                                    </label>
                                )
                            })
                        }
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
                                    <label className="container">{singleBattery}mAh
                                        <input type="checkbox" checked={filters.battery == singleBattery} name="battery" value = {singleBattery} onChange={updateFilters}/>
                                        <span className="checkmark"></span>
                                    </label>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Single Filter Box */}
                <div className="single-filter-box">
                    <h3 className="filter-box-title">Filter by Charging type</h3>
                    <div className="filters">
                        <label className="container">ALL
                            <input type="checkbox" checked={filters.chargingType == "all"} name="chargingType" value = "all" onChange={updateFilters}/>
                            <span className="checkmark"></span>
                        </label>
                        {
                            chargingTypes.length > 0 && chargingTypes.map((singleChargingType, index) => {
                                return (
                                    <label className="container">{singleChargingType} Type
                                        <input type="checkbox" checked={filters.chargingType == singleChargingType} name="chargingType" value = {singleChargingType} onChange={updateFilters}/>
                                        <span className="checkmark"></span>
                                    </label>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Single Filter Box
                <div className="single-filter-box">
                    <h3 className="filter-box-title">Filter by Color</h3>
                    <div className="filters">
                        <label className="container">ALL
                            <input type="checkbox" checked={filters.color == "all"} name="color" value = "all" onChange={updateFilters}/>
                            <span className="checkmark"></span>
                        </label>
                        {
                            allColors.length > 0 && allColors.map((singleColor, index) => {
                                return (
                                    <label className="container filter-color">
                                        <input type="checkbox" checked={filters.color == singleColor} name="color" value = {singleColor} onChange={updateFilters}/>
                                        <span className="checkmark"></span>
                                    </label>
                                )
                            })
                        }
                    </div>
                </div> */}
            </form>
        </div>
    )
}
