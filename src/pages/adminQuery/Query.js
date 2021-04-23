import React from 'react'
import {Alert} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Navbar from '../../components/navbar'
import {useAuth} from '../../context/authContext'
import {queryContext} from '../../admin/context/queryContext'
import { adminQueryContext } from '../../context/adminQueryContext'

export default function Query() {
    const {allQueries, success, loading, addQuery} = React.useContext(adminQueryContext)
    const {queriesData} = React.useContext(queryContext)
    const [subject, setSubject] = React.useState('')
    const descriptionRef = React.useRef()
    const {currentUser} = useAuth()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addQuery(subject, descriptionRef.current.value, currentUser.uid)
        setSubject('')
        descriptionRef.current.value = ""

    }

    const handleSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <>
            <Navbar/>
            <div className="signup section">
                <div className="addproduct-container">
                    {
                        success && <Alert variant="success">{success}</Alert>
                    }
                    <div className="section">
                        <button className="btn btn-secondary" onClick={() => history.push('/query')}>Add Query</button>
                        <button className="btn btn-primary" onClick={() => history.push('/myqueries')}>My Queries</button>
                    </div>
                    {
                        queriesData.length === 0 ? <p>Loading...</p> : (
                            <form className="form3" onSubmit={handleSubmit}>
                                <label>
                                    Subject
                                    <select name="query" id="query" onChange={handleSubject} required>
                                        <option value="">Select</option>
                                        {
                                            queriesData.map(item => {
                                                return (<option value={item.id}>{item.subject}</option>);
                                            })
                                        }
                                    </select>
                                </label>
                                <label>Description <input type="text" ref={descriptionRef} required/></label>
                                <div>
                                    <button className="btn btn-secondary" disabled={loading}>Submit Query</button>
                                </div>
                            </form>
                        )
                    }
                </div>
            </div>
        </>
    )
}
