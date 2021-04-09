import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div id="myHeader">
            <nav>
                <Link to='/'><img src={Logo} alt="Techyard" className="logo"/></Link>
                <form>
                    <input type="text" placeholder="Search..."/>
                </form>
                <ul className="mainMenu">
                    <li><Link to='/'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Link></li>
                    <li><Link to='/'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Link></li>
                </ul>
                <ul className="sidebar">
                    <li><Link to='/'><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></Link></li>
                </ul>
            </nav>
            <ul className="navLinks">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/mobiles'>Mobiles</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </div>
    )
}