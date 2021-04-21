import React from 'react'
import {useHistory} from 'react-router-dom'
import AdminNavbar from '../components/AdminNavbar'

export default function Dashboard() {
    const history = useHistory()
    return (
        <>
            <AdminNavbar/>
            <div className="section">
                <button className="btn btn-secondary" onClick={()=>history.push('/adminmobile')}>Add Mobiles</button>
                <span> </span>
                <button className="btn btn-secondary" onClick={()=>history.push('/adminheadphone')}>Add Headphones</button>
                <span> </span>
                <button className="btn btn-secondary" onClick={()=>history.push('/adminpowerbank')}>Add Powerbanks</button>
                <span> </span>
                <button className="btn btn-secondary" onClick={()=>history.push('/coupons')}>Add Coupons</button>
            </div>
            <div className="section d-flex">
                No orders yet...
            </div>
        </>
    )
}
