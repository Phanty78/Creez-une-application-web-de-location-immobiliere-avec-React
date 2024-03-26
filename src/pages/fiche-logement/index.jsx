import Slider from '../../components/Slider/Slider'
import Information from '../../components/Information/Information'
import { useState } from 'react'
import  data from '../../../data/data.json'
import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import './fiche-logement.css'


function FicheLogement() {
    let [pictures, setPictures] = useState(undefined)
    let [title, setTitle] = useState("")
    let { id } = useParams() //Récupération de l'id dans l'URL

    useEffect(() =>{
        const dataIndex = data.findIndex((idNumber) => idNumber.id === id);
    if (dataIndex !== -1) {
        setPictures(data[dataIndex].pictures)
        setTitle(data[dataIndex].title)
    }
    },[id])
    
    return (
        <div className="fiche-logement-main-container">
            { pictures ? <Slider pictures={pictures} title={title} setPictures={setPictures}/> : <div>Chargement...</div>}
        </div>
    )
}

export default FicheLogement