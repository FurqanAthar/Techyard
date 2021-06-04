import React from 'react'
import {firestore, storage} from '../../firebase'

export const addMobileContext = React.createContext()

export default function AddMobileContextProvider({children}) {
    const [mobileData, setMobileData] = React.useState([])
    const [loading,setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    let copyData = []
    
    React.useEffect(()=>{
        let mobiles = []
        firestore.collection('mobiles').get().then((data) => {
            var obj={}
            let i=0;
            data.forEach((doc) => {
                obj={id:doc.id,...doc.data()}
                mobiles[i]=obj
                i++;
            })
            setMobileData([...mobiles])
        }) 
    },[loading])

    const addMobile = (data) => {
        return firestore.collection('mobiles').add(data).then(()=> {
            setLoading(!loading)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        }).catch((error) => console.log(error))
    }

    const removeMobile = async (id) => {
        const m = await firestore.collection('mobiles').doc(id).delete()
        setLoading((prev) => !prev)
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 3000);
    }

    const editMobile = async (p, i) => {
        await firestore.collection('mobiles').doc(i).update({...p})
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 3000);
        setLoading(!loading)
    }
    return (
        <addMobileContext.Provider value = {{addMobile, mobileData, removeMobile, success, loading, editMobile}}>
            {children}
        </addMobileContext.Provider>
    )
}
