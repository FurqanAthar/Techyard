import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import Logo from '../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const { currentUser, logout } = useAuth()
    return (
        <div id="myHeader">
            <nav>
                <Link to='/'><img src={Logo} alt="Techyard" className="logo"/></Link>
                <ul className="navLinks">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/mobiles'>Mobiles</Link>
                    </li>
                    <li>
                        <Link to='/headphones'>Headphones</Link>
                    </li>
                    <li>
                        <Link to='/accessories'>Accessories</Link>
                    </li>
                    {
                        !currentUser && (
                            <>
                                <li>
                                    <Link to='/signup'>Signup</Link>
                                </li>
                            </>
                        )
                    }
                    {
                        currentUser && (
                            <li>
                                <a onClick={logout}>Logout</a>
                            </li>
                        )
                    }
                </ul>
                <ul className="mainMenu">
                    <li><Link to='/mycart'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Link></li>
                    <li><Link to='/forgot-password'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Link></li>
                </ul>
            </nav>
        </div>
    )
}