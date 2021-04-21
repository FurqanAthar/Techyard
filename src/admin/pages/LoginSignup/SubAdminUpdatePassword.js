import { Link } from "react-router-dom"
import React, { useRef, useState } from "react"
import AdminNavbar from '../../components/AdminNavbar'
import { Form, Button, Card, Alert } from "react-bootstrap"
import {subAdminContext} from '../../context/LoginSignupContexts/subAdminContext'

export default function SubAdminUpdatePassword() {
    const {email, resetPassword, success, error, id} = React.useContext(subAdminContext)
    const [loading, setLoading] = React.useState(false)
    const passwordRef = useRef()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        await resetPassword(passwordRef.current.value, id)
        setLoading(false)
    }
    
    return (
        <>
            <AdminNavbar/>
            <div className="signup"> 
                <div className="signup-container">
                    <Card>
                        <Card.Body>
                        <h2 className="text-center mb-4">Password Reset</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" ref={passwordRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="w-100" type="submit">
                            Reset Password
                            </Button>
                        </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}
