import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    const history = useHistory()
    return (
        <>
            <div className="footer">
                <Link to='/'><img src={Logo} alt="Techyard" className="logo"/></Link>
                <ul className="mainMenu">
                    <li><a href="https://www.facebook.com/"><FaFacebook/></a></li>
                    <li><a href="https://www.instagram.com/"><FaInstagram/></a></li>
                </ul>
                <ul className="footerLinks">
                    <li>
                        <Link to='/query'>Query? Contact Us</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
