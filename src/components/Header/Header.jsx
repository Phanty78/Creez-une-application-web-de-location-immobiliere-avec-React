import { Link, NavLink } from "react-router-dom";
import "./header.css"

function Header() {
    return (
        <header className="header">
            <img src="./logo_kaza.png" alt="Logo de Kaza" />
            <nav>
                <NavLink to="/" className="nav-link">Accueil</NavLink>
                <NavLink to="/a-propos" className="nav-link">A-propos</NavLink>
            </nav>
        </header>
    )
}

export default Header