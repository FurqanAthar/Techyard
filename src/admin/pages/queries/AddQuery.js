import React from 'react'
import {Alert} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import AdminNavbar from '../../components/AdminNavbar'
import {queryContext} from '../../context/queryContext'
import QueryCard from '../../components/queries/QueryCard'

export default function AddQuery() {
    const {queriesData, addNewQueryData, loading, success} = React.useContext(queryContext)
    const subjectRef = React.useRef()
    const codeRef = React.useRef()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addNewQueryData(subjectRef.current.value, codeRef.current.value)
        subjectRef.current.value = ""
        codeRef.current.value = ""
    }
    return (
        <>
            <AdminNavbar/>
            <div className="section">
                <button className="btn btn-secondary" onClick={()=>{history.push('/addquery')}}>Add New Query Subject</button>
                <button className="btn btn-primary" onClick={()=>{history.push('/reviewqueries')}}>Review Queries</button>
                <button className="btn btn-primary" onClick={()=>{history.push('/closedqueries')}}>Closed Queries</button>
            </div>
            <div className="signup section">
                <div className="addproduct-container">
                    {
                        success && <Alert variant="success">{success}</Alert>
                    }
                    <form onSubmit={handleSubmit}>
                        <label>Subject <input type="text" ref={subjectRef} required/></label>
                        <label>Code <input type="text" ref={codeRef} required/></label>
                        <button className="btn btn-secondary" disabled={loading}>Add Query Subject</button>
                    </form>
                </div>
            </div>
            <div className="section d-flex">
                <div className="cart-section">
                    {
                        queriesData.length === 0 ? <p>No Query Subject. Add Now!</p> : (
                            (
                                queriesData.map((item, index) => {
                                    return <QueryCard data={{...item}} key={index}/>
                                })
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}
