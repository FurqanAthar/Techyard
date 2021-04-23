import React from 'react'
import { firestore } from '../firebase'

export const comingSoonContext = React.createContext()

export default function ComingSoonContextProvider({children}) {
    const [comingSoonData, setComingSoonData] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const [loaded, setLoaded] = React.useState(false)
    const [success, setSuccess] = React.useState('')

    if (!loaded) {
        firestore.collection('comingsoon').get().then(data => {
            data.forEach(doc => {
                let id = doc.id
                setComingSoonData({id, ...doc.data()})
                setLoaded(true)
            })
        })
    }

    const register = async (firstName, lastName, email, Number) => {
        setLoading(true)
        return await firestore.collection('comingsoon').get().then(data => {
            data.forEach(async doc => {
                let prevRegistered = doc.data().registrations
                prevRegistered.push({firstName, lastName, email, Number})
                await firestore.collection('comingsoon').doc(doc.id).update({
                    registrations: [...prevRegistered]
                }).then(() => {
                    setSuccess("Registered!")
                    setTimeout(()=>{
                        setSuccess("")
                    }, 3000)
                    setLoading(false)
                })
            })
        })
        setLoading(false)
    }

    return (
        <comingSoonContext.Provider value={{comingSoonData, register, success, loading}}>
            {children}
        </comingSoonContext.Provider>
    )
}