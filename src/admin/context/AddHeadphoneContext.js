import React from 'react'
import {firestore, storage} from '../../firebase'

export const addHeadphoneContext = React.createContext()

export default function AddHeadphoneContextProvider({children}) {
    const [headphoneData, setHeadphoneData] = React.useState([])
    const [loading,setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    
    React.useEffect(()=>{
        let headphones = []
        firestore.collection('headphones').get().then((data) => {
            var obj={}
            let i=0;
            data.forEach((doc) => {
                obj={id:doc.id,...doc.data()}
                headphones[i]=obj
                i++;
            })
            setHeadphoneData([...headphones])
        }) 
    },[loading])

    const addHeadphone = (data) => {
        return firestore.collection('headphones').add(data).then(()=> {
            setLoading(!loading)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        }).catch((error) => console.log(error))
    }

    const removeHeadphone = async (id) => {
        const m = await firestore.collection('headphones').doc(id).delete()
        setLoading((prev) => !prev)
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 3000);
    }

    const editHeadphone = async (p, i) => {
        await firestore.collection('headphones').doc(i).update({...p})
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 3000);
        setLoading(!loading)
    }
    return (
        <addHeadphoneContext.Provider value = {{addHeadphone, headphoneData, removeHeadphone, success, loading, editHeadphone}}>
            {children}
        </addHeadphoneContext.Provider>
    )
}
