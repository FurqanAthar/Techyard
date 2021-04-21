import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { superAdminContext } from "../admin/context/LoginSignupContexts/superAdminContext"

export default function SuperAdminPrivateRoute({children, ...rest}) {
    const {superAdmin} = React.useContext(superAdminContext)
    return (
        <Route {...rest} render={()=>{
            return superAdmin ? children : <Redirect to='/superadminlogin'/>
        }}></Route>
    )
}
