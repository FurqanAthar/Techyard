import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div>
            <nav>
                <img src={Logo} alt="Techyard" className="logo"/>
                <form>
                    <input type="text" placeholder="Search..."/>
                </form>
                <ul className="mainMenu">
                    <li><Link to='/'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Link></li>
                    <li><Link to='/'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></Link></li>
                    <li>
                        <input type="checkbox" id="toggle"/>
                        <label htmlFor="toggle">
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </label>
                    </li>
                </ul>
                <ul className="sidebar">
                    <li><Link to='/'><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></Link></li>
                </ul>
                <div id="slidingMenu">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
