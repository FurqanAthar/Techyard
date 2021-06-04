import React from 'react'
import {queryContext} from '../../context/queryContext'
import {adminQueryContext} from '../../../context/adminQueryContext'

export default function QueryFilters() {
    const {updateFilters, filters} = React.useContext(adminQueryContext)
    const {queriesData} = React.useContext(queryContext)
    return (
        <>
            {
                queriesData.length === 0 ? <p>No Filters</p> : (
                    <div className = "filter-section">
                        <form className="filter-form">
                            <div className="single-filter-box">
                                <h3 className="filter-box-title">Filter by Subject</h3>
                                <div className="filters">
                                    <label className="container">ALL
                                        <input type="checkbox" checked={filters.subjectId == "all"} name="subjectId" value = "all" onChange={updateFilters}/>
                                        <span className="checkmark"></span>
                                    </label>
                                    {
                                        queriesData.length > 0 && queriesData.map((item, index) => {
                                            return (
                                                <label className="container">{item.code.toLocaleUpperCase()}
                                                    <input type="checkbox" checked={filters.subjectId == item.id} name="subjectId" value = {item.id} onChange={updateFilters}/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                )
            }
        </>
    )
}
