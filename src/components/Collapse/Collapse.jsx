import { useState } from 'react'
import './collapse.css'
import arrow from '../../../public/arrow.svg'

function Collapse({title, text, customClass}){
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

export default Collapse