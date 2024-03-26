import './card.css'
import { NavLink } from 'react-router-dom'

function Card({title,cover,id}){
    return (
        <div className="card">
            <NavLink to={`/fiche-logement/${id}`} className="error-nav-link">
            <img src={cover} alt={title}/>
            <div className='card-overlay'></div>
            <h2>{title}</h2>
            </NavLink>
        </div>
    )
}

export default Card