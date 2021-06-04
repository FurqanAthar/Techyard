import React from 'react'
import {Alert} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar'
import MobileCard from '../../components/mobile/MobileCard'
import {addMobileContext} from '../../context/AddMobileContext'

export default function AdminMobile() {
    const {mobileData, success} = React.useContext(addMobileContext)
    const history = useHistory()
    
    return (
        <>
            <AdminNavbar/>
            <div className="section">
                {
                    success && <Alert variant="success">Updated</Alert>
                }
                <button className="btn btn-secondary">All Mobiles</button>
                <button className="btn btn-primary" onClick={() => history.push('/addmobile')}>Add Mobiles</button>
            </div>
            <div className="section d-flex">
                {
                    mobileData.length > 0 ? (    
                        <div className="cart-section">
                            {
                                mobileData.map((item, index) => {
                                    return <MobileCard {...item}></MobileCard>
                                })
                            }
                        </div>
                    ) : <div className="section">No Mobiles to Show...</div>
                }
            </div>
        </>
    )
}
