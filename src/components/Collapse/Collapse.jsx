import { useState } from 'react'
import './collapse.css'
import arrow from '../../../public/arrow.svg'
import PropTypes from 'prop-types'

function Collapse({title, text}){
    const [isClosed, setIsClosed] = useState(true)

    function setAnimating() {
        setIsClosed(!isClosed);
    }

    return (
        <div className='collapse-container'>
            <div className='collapse-box'>
                <h2>{title}</h2>
                <img className={`arrow ${isClosed ? 'rotate-arrow' : ''}`} onClick={setAnimating} src={arrow} alt='icone de flèche'  aria-expanded={!isClosed}/>
            </div>
            { Array.isArray(text) ?
                <div className={`text-container ${isClosed ? 'hidden' : ''}`}>
                    <ul>
                        {text.map((element,index) =>
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                </div>
            : 
            <div className={`text-container ${isClosed ? 'hidden' : ''}`} >
                <p>{text}</p>
            </div>}
        </div> 
    )
}

Collapse.propTypes = {
    title : PropTypes.string.isRequired,
    text : PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.arrayOf(PropTypes.string).isRequired
    ])
}

export default Collapse
