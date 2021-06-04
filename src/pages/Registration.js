import React from 'react'
import { v4 as uuidv4} from 'uuid'
import {Alert} from 'react-bootstrap'
import Navbar from '../components/navbar'
import {comingSoonContext} from '../context/comingSoonContext'

export default function Registration() {
    const {register, success, loading} = React.useContext(comingSoonContext)
    const firstNameRef = React.useRef()
    const lastNameRef = React.useRef()
    const numberRef = React.useRef()
    const emailRef = React.useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await register(firstNameRef.current.value, lastNameRef.current.value, emailRef.current.value, numberRef.current.value)
        firstNameRef.current.value = null
        lastNameRef.current.value = null
        emailRef.current.value = null
        numberRef.current.value = null
    }
    return (
        <>
            <Navbar/>
            <div className="signup section">
                <div className="addproduct-container">
                    {
                        success && <Alert variant="success">{success}</Alert>
                    }
                    <form onSubmit={handleSubmit}>
                        <label>First Name <input type="text" ref={firstNameRef} required/></label>
                        <label>Last Name <input type="text" ref={lastNameRef} required/></label>
                        <label>Email <input type="email" ref={emailRef} required/></label>
                        <label>Phone Number <input type="number" ref={numberRef} required/></label>
                        <button className="btn btn-secondary" disabled={loading}>Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}
