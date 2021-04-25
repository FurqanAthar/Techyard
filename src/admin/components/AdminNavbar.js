import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {subAdminContext} from '../context/LoginSignupContexts/subAdminContext'

export default function AdminNavbar() {
    const {subAdmin, logout} = React.useContext(subAdminContext) 
    return (
        <div id="myHeader">
            <nav>
                <Link to='/admindashboard'><img src={Logo} alt="Techyard" className="logo"/></Link>
                <ul className="navLinks">
                    <li>
                        <Link to='/adminmobile'>Mobiles</Link>
                    </li>
                    <li>
                        <Link to='/adminheadphone'>Headphones</Link>
                    </li>
                    <li>
                        <Link to='/adminpowerbank'>Powerbanks</Link>
                    </li>
                    {/* <li>
                        <Link to='/coupons'>Coupons</Link>
                    </li> */}
                    <li>
                        <Link to='/addcomingsoon'>Coming Soon</Link>
                    </li>
                    <li>
                        <Link to='/addquery'>Queries</Link>
                    </li>
                    {
                        subAdmin && (
                            <li>
                                <a onClick={logout}>Logout</a>
                            </li>
                        )
                    }
                </ul>
                <ul className="mainMenu">
                    <li><Link to='/subadminupdatepassword'><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></Link></li>
                </ul>
            </nav>
        </div>
    )
}
