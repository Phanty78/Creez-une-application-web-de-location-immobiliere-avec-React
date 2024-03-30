import { useState } from 'react'
import './collapse.css'
import arrow from '../../../public/arrow.svg'

function Collapse({title, text, customClass}){
    const [isClosed, setIsClose] = useState(true)
    const [isWrap, setIsWrap] = useState(false)

    function setAnimating() {
        setIsClose(!isClosed);
    }



    return (
        <div className='collapse-container'>
            <div className='collapse-box'>
                <h2>{title}</h2>
                <img className={`arrow ${isClosed ? 'rotate-arrow' : ''}`} onClick={setAnimating} src={arrow} alt='icone de flèche'/>
            </div>
            <div className={`text-container ${isClosed ? 'hidden' : ''}`} >
                <p>{text}</p>
            </div>
        </div> 
    )
}

export default Collapse