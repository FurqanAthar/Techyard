import React from 'react'
import {firestore} from '../../firebase'
import {useHistory, Link} from 'react-router-dom'
import { Form, Button, Card, Alert } from "react-bootstrap"
import SubAdminCard from '../components/superadmin/SubAdminCard'
import SuperAdminNavbar from '../components/superadmin/SuperAdminNavbar'

export default function SuperAdminDashboard() {
    const [allAdmins, setAllAdmins] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [loaded, setLoaded] = React.useState(false)
    const [success, setSuccess] = React.useState("")
    const [error, setError] = React.useState("")
    const passwordRef = React.useRef()
    const emailRef = React.useRef()
    const history = useHistory()

    React.useEffect(()=>{
        firestore.collection('admins').get().then(data => {
            let admins = []
            data.forEach(doc => {
                admins.push({id:doc.id, ...doc.data()})
            })
            setAllAdmins([...admins])
        })
    }, [loaded])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        let result = true
        firestore.collection('admins').get().then(data => {
            data.forEach(doc => {
                let d = doc.data()
                if (d.email === emailRef.current.value) {
                    setError("Failed to Add")
                    setTimeout(() => {
                        setError("")
                    }, 3000)
                    result = false
                }
            })
        }).then(() => {
            if (result === true) {
                firestore.collection('admins').add({
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                })
                emailRef.current.value = ""
                passwordRef.current.value = ""
                setLoaded(!loaded)
                setSuccess("New Admin Added!")
                setTimeout(() => {
                    setSuccess("")
                }, 3000)
            }
        })
        setLoading(false)
    }
    return (
        <>
            <SuperAdminNavbar/>
            <div className="signup section">
                <div className="signup-container">
                    <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Add Admin</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}
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
                            Add
                        </Button>
                        </Form>
                    </Card.Body>
                    </Card>
            </div>
        </div>
        <div className="section d-flex">
            {
                allAdmins.length > 0 ? (
                    <div className="cart-section">
                        {
                            allAdmins.map((item, index) => {
                                return <SubAdminCard data = {{...item, loaded, setLoaded}}/>
                            })
                        }
                    </div>
                ) : <p>No Admins to Display...</p>
            }
        </div>
      </>
    )
}
