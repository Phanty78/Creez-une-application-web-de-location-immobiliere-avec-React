import { NavLink } from "react-router-dom";
import "./header.css"
import kazaLogo from '../../../public/logo_kaza.png'
import { useState } from "react";

function Header() {

const [isHomeActive, setIsHomeActive] = useState(true)
const [isAproposActive, setIsAproposActive] = useState(false)

function toggleActive(isActive) {
    if (!isActive) {
        setIsHomeActive(!isHomeActive)
        setIsAproposActive(!isAproposActive) 
    }
}

    return (
        <header className="header">
            <NavLink to="/">
                <img src={kazaLogo} alt="Logo de Kaza" onClick={() => toggleActive(isHomeActive)} className="logo" />
            </NavLink> 
            <nav>
                <NavLink to="/" onClick={() => toggleActive(isHomeActive)} className={`nav-link ${isHomeActive ? 'underline-active' : null}`}>A<span className="lowercase-in-desktop">ccueil</span></NavLink>
                <NavLink to="/a-propos" onClick={() => toggleActive(isAproposActive)} className={`nav-link ${isAproposActive ? 'underline-active' : null}`}>A <span className="lowercase-in-desktop">propos</span></NavLink>
            </nav>
        </header>
    )
}

export default Header