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
    let [description, setDescription] = useState("")
    let [rating, setRating] = useState("")
    let [host, setHost] = useState(undefined)
    let [location, setLocation] = useState("")
    let [tags, setTags] = useState([])
    let [equipments, setEquipments] = useState([])
    let { id } = useParams() //Récupération de l'id dans l'URL

    useEffect(() =>{
        const dataIndex = data.findIndex((idNumber) => idNumber.id === id);
    if (dataIndex !== -1) {
        setPictures(data[dataIndex].pictures)
        setTitle(data[dataIndex].title)
        setDescription(data[dataIndex].description)
        setRating(data[dataIndex].rating)
        setHost(data[dataIndex].host)
        setLocation(data[dataIndex].location)
        setTags(data[dataIndex].tags)
        setEquipments(data[dataIndex].equipments)
    }
    },[id])
    
    return (
        <div className="fiche-logement-main-container">
            { pictures ? <Slider pictures={pictures} title={title} /> : <div>Chargement...</div>}
            { host ? <Information title={title} description={description} rating={rating} host={host} location={location} tags={tags} equipments={equipments} /> : <div>Chargement...</div> }
        </div>
    )
}

export default FicheLogement