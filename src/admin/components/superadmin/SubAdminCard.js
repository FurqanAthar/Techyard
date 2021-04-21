import React from 'react'
import {FaTimes} from "react-icons/fa";
import { firestore } from '../../../firebase';

export default function SubAdminCard({data}) {
    const {id, email, password, loaded, setLoaded} = data
    const removeAdmin = async (id) => {
        await firestore.collection('admins').doc(id).delete()
        setLoaded(!loaded)
    }
    return (
        <div>
            <div className="subadmin-card">
                <div className="content">
                    <p>Email: <span>{email}</span></p>
                    <p>Password: <span>{password}</span></p>
                </div>
                <div className="remove-item-btn">
                    <button type="button" className="cart-btn amount-btn" onClick={()=>removeAdmin(id)}><FaTimes/></button>
                </div>
            </div>
        </div>
    )
}
