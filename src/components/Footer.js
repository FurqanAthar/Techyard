import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <Link to='/'><img src={Logo} alt="Techyard" className="logo"/></Link>
                <ul className="footerLinks">
                    <li>
                        <Link to='/query'>Query? Contact Us</Link>
                    </li>
                </ul>
                <ul className="mainMenu">
                    <li><FaFacebook/></li>
                    <li><FaInstagram/></li>
                </ul>
            </div>
        </>
    )
}
