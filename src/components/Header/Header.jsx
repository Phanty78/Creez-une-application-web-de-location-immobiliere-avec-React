import { NavLink } from "react-router-dom";
import "./header.css"
import kazaLogo from '../../../public/logo_kaza.png'

function Header() {

    return (
        <header className="header">
            <NavLink to="/">
                <img src={kazaLogo} alt="Logo de Kaza" className="logo" />
            </NavLink>
            <nav>
                <NavLink to="/" className="nav-link">A<span className="lowercase-in-desktop">ccueil</span></NavLink>
                <NavLink to="/a-propos" className="nav-link">A <span className="lowercase-in-desktop">propos</span></NavLink>
            </nav>
        </header>
    )
}

export default Header