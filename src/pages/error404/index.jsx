import { Link } from 'react-router-dom'
import './error404.css'

function Error404() {
    return (
        <div className='error-404-container'>
            <p className='number-404'>404</p>
            <p className='error-message'>Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link to="/" className="error-nav-link">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error404