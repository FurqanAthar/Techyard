import React from 'react'
import {Alert} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar'
import PowerbankCard from '../../components/powerbank/PowerbankCard'
import {addPowerbankContext} from '../../context/AddPowerbankContext'

export default function AdminPowerbank() {
    const {powerbankData, success} = React.useContext(addPowerbankContext)
    const history = useHistory()
    
    return (
        <>
            <AdminNavbar/>
            <div className="section">
                {
                    success && <Alert variant="success">Updated</Alert>
                }
                <button className="btn btn-secondary">All Powerbanks</button>
                <button className="btn btn-primary" onClick={() => history.push('/addpowerbank')}>Add Powerbank</button>
            </div>
            <div className="section d-flex">
                {
                    powerbankData.length > 0 ? (    
                        <div className="cart-section">
                            {
                                powerbankData.map((item, index) => {
                                    return <PowerbankCard {...item}></PowerbankCard>
                                })
                            }
                        </div>
                    ) : <div className="section">No Powerbanks to Show...</div>
                }
            </div>
        </>
    )
}
