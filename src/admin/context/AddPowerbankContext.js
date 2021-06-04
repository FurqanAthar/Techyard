import React from 'react'
import {firestore, storage} from '../../firebase'

export const addPowerbankContext = React.createContext()

export default function AddPowerbankContextProvider({children}) {
    const [powerbankData, setPowerbankData] = React.useState([])
    const [loading,setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    
    React.useEffect(()=>{
        let powerbanks = []
        firestore.collection('powerbanks').get().then((data) => {
            var obj={}
            let i=0;
            data.forEach((doc) => {
                obj={id:doc.id,...doc.data()}
                powerbanks[i]=obj
                i++;
            })
            setPowerbankData([...powerbanks])
        }) 
    },[loading])

    const addPowerbank = (data) => {
        return firestore.collection('powerbanks').add(data).then(()=> {
            setLoading(!loading)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        }).catch((error) => console.log(error))
    }

    const removePowerbank = async (id) => {
        const m = await firestore.collection('powerbanks').doc(id).delete()
        setLoading((prev) => !prev)
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 3000);
    }

    const editPowerbank = async (p, i) => {
        await firestore.collection('powerbanks').doc(i).update({...p})
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 3000);
        setLoading(!loading)
    }
    return (
        <addPowerbankContext.Provider value = {{addPowerbank, powerbankData, removePowerbank, success, loading, editPowerbank}}>
            {children}
        </addPowerbankContext.Provider>
    )
}
