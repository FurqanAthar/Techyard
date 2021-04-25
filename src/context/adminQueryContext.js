import React from 'react'
import {firestore} from '../firebase'

export const adminQueryContext = React.createContext()

export default function AdminQueryContextProvider({children}) {
    const [closedQueries, setClosedQueries] = React.useState([])
    const [openQueries, setOpenQueries] = React.useState([])
    const [allQueries, setAllQueries] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [filtered, setFiltered] = React.useState([])
    const [success, setSuccess] = React.useState('')
    const [load, setLoad] = React.useState(true)
    const [filters, setFilters] = React.useState({
        subjectId: `all`
    })

    React.useEffect(() => {
        let newQueries = [...openQueries]
        const {subjectId} = filters
        if (subjectId !== `all`) {
            newQueries = newQueries.filter(item => item.querySubjectId === subjectId)
        }
        setFiltered([...newQueries])
    }, [allQueries, filters])
    
    if(load) {
        firestore.collection('adminqueries').get().then(data => {
            let queries = []
            let closed = []
            let open = []
            data.forEach(doc => {
                let id = doc.id
                queries.push({id, ...doc.data()})
                if (doc.data().status === `open`) {
                    open.push({id, ...doc.data()})
                } else if (doc.data().status === `closed`) {
                    closed.push({id, ...doc.data()})
                }
            })
            setClosedQueries([...closed])
            setAllQueries([...queries])
            setOpenQueries([...open])
            setFiltered([...open])

        }).then(()=>{
            setLoad(false)
        })
    }

    const updateFilters = (e) => {
        const filter = e.target.name
        const value = e.target.value
        let filtersCopy = filters
        if (filter === `subjectId`) {
            filtersCopy.subjectId = value
        }
        setFilters({...filtersCopy})
    }

    const addQuery = async (queryId, description, userId) => {
        setLoading(true)
        return await firestore.collection('adminqueries').add({
            userId : userId,
            querySubjectId : queryId,
            description : description,
            status : `open`,
            feedback: ``,

        }).then(() => {
            setSuccess('Query Submitted')
            setTimeout(()=>{
                setSuccess('')
                setLoading(false)
            }, 3000)
            setLoad(true)
        })
    }

    const feedback = (id, f) => {
        setLoading(true)
        return firestore.collection('adminqueries').doc(id).update({
            feedback : f,
            status : `closed`
        }).then(() => {
            setLoading(false)
        })
    }

    return (
        <adminQueryContext.Provider value={{allQueries, loading, success, addQuery, openQueries, closedQueries, updateFilters, filtered, filters, feedback, setLoad}}>
            {children}
        </adminQueryContext.Provider>
    )
}