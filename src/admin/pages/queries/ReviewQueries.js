import React from 'react'
import {useHistory} from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar'
import QueryFilters from '../../components/queries/QueryFilters'
import {adminQueryContext} from '../../../context/adminQueryContext'
import QueryFeedbackCard from '../../components/queries/QueryFeedbackCard'

export default function ReviewQueries() {
    const {filtered, allQueries, filters} = React.useContext(adminQueryContext)
    const history = useHistory()
    return (
        <>
            <AdminNavbar/>
            <div className="section">
                <button className="btn btn-primary" onClick={()=>{history.push('/addquery')}}>Add New Query Subject</button>
                <button className="btn btn-secondary" onClick={()=>{history.push('/reviewqueries')}}>Review Queries</button>
                <button className="btn btn-primary" onClick={()=>{history.push('/closedqueries')}}>Closed Queries</button>
            </div>
            <div className="section d-flex">
                <QueryFilters/>
            </div>
            <div className="section d-flex">
                {
                    filtered && filtered.map((item, index) => {
                        return <QueryFeedbackCard data={{...item}} key={index}/>
                    })
                }
            </div>
        </>
    )
}
