import React from 'react'
import {Alert} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar'
import HeadphoneCard from '../../components/headphone/HeadphoneCard'
import {addHeadphoneContext} from '../../context/AddHeadphoneContext'

export default function AdminHeadphone() {
    const {headphoneData, success} = React.useContext(addHeadphoneContext)
    const history = useHistory()
    
    return (
        <>
            <AdminNavbar/>
            <div className="section">
                {
                    success && <Alert variant="success">Updated</Alert>
                }
                <button className="btn btn-secondary">All Headphones</button>
                <button className="btn btn-primary" onClick={() => history.push('/addheadphone')}>Add Headphone</button>
            </div>
            <div className="section d-flex">
                {
                    headphoneData.length > 0 ? (    
                        <div className="cart-section">
                            {
                                headphoneData.map((item, index) => {
                                    return <HeadphoneCard {...item}></HeadphoneCard>
                                })
                            }
                        </div>
                    ) : <div className="section">No Headphones to Show...</div>
                }
            </div>
        </>
    )
}
