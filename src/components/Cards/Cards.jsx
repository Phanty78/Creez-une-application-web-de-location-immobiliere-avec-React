import './cards.css'
import { NavLink } from 'react-router-dom'

function Cards({title,cover,id}){
    return (
        <div className="card">
            <NavLink>
            <img src={cover} alt={title}/>
            <div className='card-overlay'></div>
            <h2>{title}</h2>
            </NavLink>
        </div>
    )
}

export default Cards