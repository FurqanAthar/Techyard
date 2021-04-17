import React from 'react'
import {firestore, storage} from '../../firebase'

export const addMobileContext = React.createContext()

export default function AddMobileContextProvider({children}) {
    let copyData = []
    const addMobile = (data, colorData) => {
        return firestore.collection('mobiles').add(data).then((docRef) => {
            copyData = colorData
            colorData.map((item, index) => {
                let uploadTask = storage.ref(`/images/${docRef.id}${index}`).put(item.image);
                uploadTask.on("state_changed", () => {
                storage
                    .ref("images")
                    .child(`${docRef.id}${index}`)
                    .getDownloadURL()
                    .then((picture) => {
                        copyData[index].image = picture
                        firestore.collection('mobiles').doc(docRef.id).update({
                            colors: copyData
                        })
                    }).catch((error) => {console.error(error)})
                })
                return
            })
        })
    }
    return (
        <addMobileContext.Provider value = {{addMobile}}>
            {children}
        </addMobileContext.Provider>
    )
}
