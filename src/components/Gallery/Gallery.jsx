import './gallery.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

function Gallery({pictures, title}) {

    const [actualPictureIndex, setActualPictureIndex] = useState(0);

    function previousPicture() {
        setActualPictureIndex((prevIndex) => {
          const newPrevIndex = prevIndex - 1 < 0 ? pictures.length - 1 : prevIndex - 1
          return newPrevIndex
        });
      }

    function nextPicture(){
        setActualPictureIndex((nextIndex) => {
            const newNextIndex = nextIndex + 1 > pictures.length - 1 ? 0 : nextIndex + 1
            return newNextIndex
        })
    }

    return (

        <div className="slider-container">
            <img className='slider-picture' src={pictures[actualPictureIndex]} alt={title}/>
            { pictures.length > 1 &&
             ( <>
                    <div className="arrow-container">
                        <img onClick={previousPicture} src="/vector-left.svg" alt="fléche vers la gauche"/>
                        <img onClick={nextPicture} src="/vector-right.svg" alt="fléche vers la droite"/>
                    </div>
                    <p className='picture-number'>{actualPictureIndex + 1}/{pictures.length}</p>
                </>
             
             )}
        </div>
    )
}

Gallery.propTypes = {
    pictures : PropTypes.array.isRequired,
    title : PropTypes.string.isRequired
}

export default Gallery