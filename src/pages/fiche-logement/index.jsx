import Gallery from '../../components/Gallery/Gallery'
import Information from '../../components/Information/Information'
import { useState } from 'react'
import  data from '../../../data/data.json'
import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import './fiche-logement.css'
import Error from '../../pages/error404/index.jsx'


function FicheLogement() {
    let [pictures, setPictures] = useState("")
    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")
    let [rating, setRating] = useState("")
    let [host, setHost] = useState("")
    let [location, setLocation] = useState("")
    let [tags, setTags] = useState([])
    let [equipments, setEquipments] = useState([])
    let { id } = useParams() //Récupération de l'id dans l'URL
    let [isIdValid, setIsIdValid] = useState(true)

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
    }else{
        setIsIdValid(false)
    }
    },[id])
       
    return (
        <div className="fiche-logement-main-container">
            {isIdValid ? (
                <>
                    {pictures ? <Gallery pictures={pictures} title={title} /> : <div>Chargement...</div>}
                    {host ? <Information title={title} description={description} rating={rating} host={host} location={location} tags={tags} equipments={equipments} /> : <div>Chargement...</div>}
                </>
            ) : (
                <Error />
            )}
        </div>
    );  
}

export default FicheLogement
