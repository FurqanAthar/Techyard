import React from 'react'
import {useHistory} from 'react-router-dom'
import Navbar from '../../components/navbar'
import {useAuth} from '../../context/authContext'
import {adminQueryContext} from '../../context/adminQueryContext'
import AdminQueryCard from '../../components/queries/AdminQueryCard'

export default function MyQueries() {
    const {allQueries} = React.useContext(adminQueryContext)
    const [myQueries, setMyQueries] = React.useState([])
    const [load, setLoad] = React.useState(true)
    const {currentUser} = useAuth()
    const history = useHistory()

    if (allQueries.length > 0) {
        if (load) {
            let queries = []
            allQueries.map(item => {
                if (item.userId === currentUser.uid) {
                    queries.push({...item})
                }
            })
            setMyQueries([...queries])
            setLoad(false)
        }
    }

    return (
        <>
            <Navbar/>
            <div className="section">
                <button className="btn btn-primary" onClick={() => history.push('/query')}>Add Query</button>
                <button className="btn btn-secondary" onClick={() => history.push('/myqueries')}>My Queries</button>
            </div>
            <div className="section d-flex">
                <div className="cart-section">
                    {
                        allQueries.length === 0 ? <p>Loading...</p> : (
                            myQueries.length === 0 ? <p>No Query Yet...</p> : (
                                myQueries.map((item, index) => {
                                    return <AdminQueryCard data={{...item}} key={index}/>
                                })
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}
