import './information.css';
import Collapse from '../Collapse/Collapse';
import Tag from '../Tag/Tag';
import Rating from '../Rating/Rating';
import { useState, useEffect } from 'react';

function Information({ title, description, rating, host, location, tags, equipments }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 576);
    };

    // Écoute les changements de taille dès le montage du composant
    window.addEventListener('resize', handleResize);

    // Appel immédiat pour définir l'état initial correctement
    handleResize();

    // Nettoie l'écouteur lorsque le composant est démonté
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Rendu conditionnel basé sur isSmallScreen
  if (isSmallScreen) {
    return (
        <div className='information-container'>
            <div className='title-and-location'>
                <p className='title'>{title}</p>
                <p className='location'>{location}</p>
            </div>
            <Tag tags={tags} />
            <div className='rating-and-host'>
                <Rating rating={rating} />
                <div className='host-container'>
                    <p>{host.name}</p>
                    <img src={host.picture} alt={host.name}/>
                </div>
            </div>
            <div className='description-and-equipments'>
                <Collapse title="Description" text={description} />
                <Collapse title="Équipements" text={equipments} />
            </div>
        </div>
    )
  }

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
  );
}

export default Information;
