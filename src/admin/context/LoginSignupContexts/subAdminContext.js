import React from 'react'
import {firestore} from '../../../firebase'

function getSubAdmin(){
    return localStorage.getItem("subAdmin") ? JSON.parse(localStorage.getItem("subAdmin")) : false;
}

export const subAdminContext = React.createContext()

export default function SubAdminContextProvider({children}) {
    const [subAdmin, setSubAdmin] = React.useState(getSubAdmin())
    const [success, setSuccess] = React.useState("")
    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState("")
    const [id, setId] = React.useState(``)
    
    React.useEffect(()=>{
        localStorage.setItem("subAdmin", subAdmin)
    }, [subAdmin])

    const login = async (email, password) => {
        return await firestore.collection('admins').get().then((data) =>{
            data.forEach((doc) => {
                let detail = doc.data()
                if (detail.email === email && detail.password === password) {
                    setSubAdmin(true)
                    setEmail(detail.email)
                    setId(doc.id)
                }
            })
        }).catch((error) => {
            setError("Failed to Login")
            setTimeout(() => {
                setError("")
            }, 3000)
        })
    }

    const logout = () => {
        setSubAdmin(false)
        setEmail('')
        setId('')
    }

    const resetPassword = (password, idReceived) => {
        firestore.collection('admins').doc(idReceived).update({
            password: password
        }).then(() => {
            setSuccess("Updated!")
            setTimeout(() => {
                setSuccess("")
            }, 3000)
        }).catch(() => {
            setError("Failed to Update")
            setTimeout(() => {
                setError("")
            }, 3000)
        })
    }
    return (
    <subAdminContext.Provider value={{login, subAdmin, logout, error, setError, email, resetPassword, success, id}}>
        {children}
    </subAdminContext.Provider>
    )
}
