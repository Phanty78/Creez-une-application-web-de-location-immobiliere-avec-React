import { useState } from 'react'
import './collapse.css'

function Collapse({title, text}){
    const [isClose, setIsClose] = useState(true)

    function setAnimating() {
        setIsClose(!isClose);
    }

    return (
        <div className='engagements-container'>
        <div className='collapse-box'>
            <h2>{title}</h2>
            <img className={isClose ? 'collapse-arrow-to-the-bottom' : 'collapse-arrow-to-the-top'} onClick={setAnimating} src='./arrow.svg' alt='icone de flèche'/>
        </div>
        <div className= {isClose ? 'hidden' : 'text-container'}>
            {/*Pourquoi je n'arrive pas à avoir le CSS sur p*/}
            <p>{text}</p>
        </div>
    </div>
    )
}

export default Collapse