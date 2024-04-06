import './card.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function Card({title,cover,id,lazy}){
    return (
        <div className="card">
            <Link to={`/fiche-logement/${id}`} className="error-nav-link">
                <img src={cover} alt={title} loading={lazy}/>
                <div className='card-overlay'></div>
                <h2>{title}</h2>
            </Link>
        </div>
    )
}

Card.propTypes = {
    title : PropTypes.string.isRequired,
    cover : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    lazy : PropTypes.string
}

export default Card
