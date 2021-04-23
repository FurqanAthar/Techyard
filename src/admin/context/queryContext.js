import React from 'react'
import { firestore } from '../../firebase'

export const queryContext = React.createContext()

export default function QueryContextprovider({children}) {
    const [queriesData, setQueriesData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState('')
    const [load, setLoad] = React.useState(true)

    if (load) {
        firestore.collection('querydata').get().then((data) => {
            let queriesTemp = []
            data.forEach((doc) => {
                let id = doc.id
                queriesTemp.push({id, ...doc.data()})
            })
            setQueriesData([...queriesTemp])
        })
        .then(() => {
            setLoad(false)
        })
    }

    const addNewQueryData = (subject, code) => {
        setLoading(true)
        return firestore.collection('querydata').add({
            subject: subject,
            code: code
        }).then(() => {
            setSuccess("Query Subject Added")
            setTimeout(() => {
                setSuccess("")
                setLoading(false)
            }, 3000)
        }).then(() => setLoad(true))
    }

    const removeQuerySubject = (id) => {
        firestore.collection('querydata').doc(id).delete().then(() => {
            setSuccess("Query Subject Removed")
            setTimeout(() => {
                setSuccess("")
            }, 3000)
        }).then(() => setLoad(true))
    }

    return (
        <queryContext.Provider value={{queriesData, addNewQueryData, loading, success, removeQuerySubject}}>
            {children}
        </queryContext.Provider>
    )
}
