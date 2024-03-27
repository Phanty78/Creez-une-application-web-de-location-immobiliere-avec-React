import './information.css'
import Collapse from '../Collapse/Collapse'
import Tag from '../Tag/Tag'
import Rating from '../Rating/Rating'

function Information({title,description,rating,host,location,tags,equipments}) {
return (
    <div className='information-container'>
        <div className='title-and-host'>
            <div className='title-and-location'>
                <p className='title'>{title}</p>
                <p className='location'>{location}</p>
            </div>
            <div className='host-container'>
                <p>{host.name}</p>
                <img src={host.picture} alt={host.name}/>
            </div>
        </div>
        <div className='tags-and-rating'>
            <Tag tags={tags} />
            <Rating rating={rating} />
        </div>
        <div className='description-and-equipments'>
            <Collapse title="Description" text={description} />
            <Collapse title="Équipements" text={equipments} />
        </div>
    </div>
)
}

export default Information