import React from 'react'

export default function RegistrationCard({data}) {
    return (
        <>
            <div className="section order">
                <div className="orders-display">
                    <p>Name: <span>{data.firstName + ' ' + data.lastName}</span></p>
                    <p>Email: <span>{data.email}</span></p>
                    <p>Phone Number: <span>{data.Number}</span></p>
                </div>
            </div>
        </>
    )
}
