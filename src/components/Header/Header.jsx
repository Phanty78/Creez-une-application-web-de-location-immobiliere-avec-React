import { Link } from "react-router-dom";
import "./header.css"

function Header() {
    return (
        <header className="header">
            <img src="/logo_kaza.png" alt="Logo de Kaza" />
            <nav>
                <Link to="/" className="nav-link">Accueil</Link>
                <Link to="/a-propos" className="nav-link">A-propos</Link>
            </nav>
        </header>
    )
}

export default Header