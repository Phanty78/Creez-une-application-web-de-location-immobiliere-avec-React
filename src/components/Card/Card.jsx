import './card.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function Card({title,cover,id}){
    return (
        <div className="card">
            <Link to={`/fiche-logement/${id}`} className="error-nav-link">
                <img src={cover} alt={title}/>
                <div className='card-overlay'></div>
                <h2>{title}</h2>
            </Link>
        </div>
    )
}

Card.propTypes = {
    title : PropTypes.string.isRequired,
    cover : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
}

export default Card