import React from 'react'
import {firestore} from '../../../firebase'

function getSuperAdmin(){
    return localStorage.getItem("superAdmin") ? JSON.parse(localStorage.getItem("superAdmin")) : false;
}

export const superAdminContext = React.createContext()

export default function SuperAdminContextProvider({children}) {
    const [superAdmin, setSuperAdmin] = React.useState(getSuperAdmin())
    const [error, setError] = React.useState("")

    React.useEffect(()=>{
        localStorage.setItem("superAdmin", superAdmin)
    }, [superAdmin])

    const login = (email, password) => {
        return firestore.collection('superadmins').get().then((data) =>{
            data.forEach((doc) => {
                let detail = doc.data()
                if (detail.email === email && detail.password === password) {
                    setSuperAdmin(true)
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
        setSuperAdmin(false)
    }
    return (
    <superAdminContext.Provider value={{login, superAdmin, logout, error, setError}}>
        {children}
    </superAdminContext.Provider>
    )
}
