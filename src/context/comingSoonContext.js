import React from 'react'
import { firestore } from '../firebase'

export const comingSoonContext = React.createContext()

export default function ComingSoonContextProvider({children}) {
    const [comingSoonData, setComingSoonData] = React.useState({})
    const [loaded, setLoaded] = React.useState(false)

    if (!loaded) {
        firestore.collection('comingsoon').get().then(data => {
            data.forEach(doc => {
                let id = doc.id
                setComingSoonData({id, ...doc.data()})
                setLoaded(true)
            })
        })
    }

    return (
        <comingSoonContext.Provider value={{comingSoonData}}>
            {children}
        </comingSoonContext.Provider>
    )
}