import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../../assets/Logo.png'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {superAdminContext} from '../../context/LoginSignupContexts/superAdminContext'

export default function AdminNavbar() {
    const {superAdmin, logout} = React.useContext(superAdminContext)
    return (
        <div id="myHeader">
            {console.log(superAdmin)}
            <nav>
                <Link to='/admindashboard'><img src={Logo} alt="Techyard" className="logo"/></Link>
                <ul className="navLinks">
                    {
                        superAdmin && (
                            <li>
                                <a onClick={logout}>Logout</a>
                            </li>
                        )
                    }
                </ul>
                <ul className="mainMenu">
                    {/* <li><Link to='/superadminupdatepassword'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Link></li> */}
                </ul>
            </nav>
        </div>
    )
}
