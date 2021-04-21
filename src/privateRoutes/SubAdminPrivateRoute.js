import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { subAdminContext } from "../admin/context/LoginSignupContexts/subAdminContext"

export default function SubAdminPrivateRoute({children, ...rest}) {
    const {subAdmin} = React.useContext(subAdminContext)
    return (
        <Route {...rest} render={()=>{
            return subAdmin ? children : <Redirect to='/subadminlogin'/>
        }}></Route>
    )
}
