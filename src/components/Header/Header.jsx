import { NavLink } from "react-router-dom";
import "./header.css"
import kazaLogo from '../../../public/logo_kaza.png'
import { useState } from "react";

function Header() {

const [isHomeActive, setIsHomeActive] = useState(true)
const [isAproposActive, setIsAproposActive] = useState(false)

function toggleIsHomeActive() {
    if (!isHomeActive) {
        setIsHomeActive(!isHomeActive)
        setIsAproposActive(!isAproposActive) 
    }
}

function toggleIsAproposActive() {
    if (!isAproposActive) {
        setIsAproposActive(!isAproposActive)
        setIsHomeActive(!isHomeActive)
    }  
}

    return (
        <header className="header">
            <NavLink to="/">
                <img src={kazaLogo} alt="Logo de Kaza" onClick={toggleIsHomeActive} className="logo" />
            </NavLink> 
            <nav>
                <NavLink to="/" onClick={toggleIsHomeActive} className={`nav-link ${isHomeActive ? 'underline-active' : null}`}>A<span className="lowercase-in-desktop">ccueil</span></NavLink>
                <NavLink to="/a-propos" onClick={toggleIsAproposActive} className={`nav-link ${isAproposActive ? 'underline-active' : null}`}>A <span className="lowercase-in-desktop">propos</span></NavLink>
            </nav>
        </header>
    )
}

export default Header