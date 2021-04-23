import React from 'react'
import {FaTimes} from "react-icons/fa";
import { queryContext } from '../../context/queryContext'

export default function QueryCard({data}) {
    const {removeQuerySubject} = React.useContext(queryContext)
    return (
        <>
            <div className="section query-subject">
                <div className="query-subject-display">
                    <h4>Query Subject ID: <span>{data.id}</span></h4>
                    <p>Subject: <span>{data.subject}</span></p>
                    <p>Code: <span>{data.code}</span></p>
                </div>
                <button type="button" className="cart-btn amount-btn" onClick={() => {removeQuerySubject(data.id)}}><FaTimes/></button>
            </div>
        </>
    )
}
