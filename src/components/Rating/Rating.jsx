import './rating.css'
import greyStar from '../../../public/grey-star.svg'
import orangeStar from '../../../public/orange-star.svg'
import PropTypes from 'prop-types'

function Rating({rating}){
    let starNumber = parseInt(rating)
    const starArray = []
    for (let i = 0; i < 5; i++) {
        if (starNumber >= 1) {
            starArray.push(orangeStar)
            starNumber--
        }else{
            starArray.push(greyStar)
        }
    }
    return (
        <div className='stars-container'>
            {starArray.map((star, index) => (
                <img key={index} src={star} alt='étoile'/>
            ))}
        </div>
    );
}

Rating.propTypes = {
    rating : PropTypes.string.isRequired
}

export default Rating