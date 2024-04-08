import './information.css';
import Collapse from '../Collapse/Collapse';
import Tag from '../Tag/Tag';
import Rating from '../Rating/Rating';
import PropTypes from 'prop-types';

function Information({ title, description, rating, host, location, tags, equipments }) {

  return (
    <div className='informations-and-collapses-container'>
        <div className='informations-container'>
            <div className='title-and-location-and-tags-container'>
                <div className='title-and-location'>
                    <p className='title'>{title}</p>
                    <p className='location'>{location}</p>
                </div>
                <div className='tags-container'>
                {tags.map((tag, index) => {
                    return <Tag key={index} tag={tag} />
                })}
                </div>
            </div>
            <div className='host-and-ratings-container'>
                <div className='host-container'>
                    <p>{host.name}</p>
                    <img src={host.picture} alt={host.name}/>
                </div>
                <Rating rating={rating} />
            </div>
        </div>
        <div className='collapses-container'>
            <Collapse title="Description" text={description} />
            <Collapse title="Équipements" text={equipments} />
        </div>
    </div>
  );
}

Information.propTypes = {
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    host : PropTypes.object.isRequired,
    location : PropTypes.string.isRequired,
    tags : PropTypes.arrayOf(PropTypes.string).isRequired,
    equipments : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Information;
