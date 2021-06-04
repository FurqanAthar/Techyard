import React from 'react'
import {useHistory, Link} from 'react-router-dom'
import { Form, Button, Card, Alert } from "react-bootstrap"
import {subAdminContext} from '../../context/LoginSignupContexts/subAdminContext'

export default function SubAdminLogin() {
    const {login, subAdmin, error, setError} = React.useContext(subAdminContext)
    const [loading, setLoading] = React.useState(false)
    const passwordRef = React.useRef()
    const emailRef = React.useRef()
    const history = useHistory()

    if (subAdmin) {
        history.push('/admindashboard')
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            if (subAdmin) {
                history.push('/admindashboard')
            }
            else {
                setError("Failed to log in")
                setTimeout(() => {
                    setError("")
                }, 3000)
            }
        } catch {
            setError("Failed to log in")
            setTimeout(() => {
                setError("")
            }, 3000)
        }
        setLoading(false)
    }
    return (
        <div className="signup">
            <div className="signup-container">
                <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Admin Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Log In
                    </Button>
                    </Form>
                </Card.Body>
                </Card>
        </div>
      </div>
    )
}
