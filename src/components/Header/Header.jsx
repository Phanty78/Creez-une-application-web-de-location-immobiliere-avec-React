import { NavLink } from "react-router-dom";
import "./header.css"
import kazaLogo from '../../../public/logo_kaza.png'
import { useState } from "react";

function Header() {

const [isFirstLoading, setIsFirstLoading] = useState(true)

function toggleIsFirstLoading() {
    setIsFirstLoading(false)
}

    return (
        <header className="header">
            <NavLink to="/">
                <img src={kazaLogo} alt="Logo de Kaza" onClick={toggleIsFirstLoading} className="logo" />
            </NavLink>
            <nav>
                <NavLink to="/" onClick={toggleIsFirstLoading} className={`nav-link ${isFirstLoading ? 'underline-by-default' : null}`}>A<span className="lowercase-in-desktop">ccueil</span></NavLink>
                <NavLink to="/a-propos" onClick={toggleIsFirstLoading} className="nav-link">A <span className="lowercase-in-desktop">propos</span></NavLink>
            </nav>
        </header>
    )
}

export default Header