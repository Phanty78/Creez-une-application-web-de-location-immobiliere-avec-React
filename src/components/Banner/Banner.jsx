import './banner.css'
import PropTypes from 'prop-types';

function Banner({bannerTitle, backgroundImage}) {
    return (
        <div className='home-banner'>
          <img src={backgroundImage} alt={bannerTitle}/> 
          <div className='overlay'></div>
          <h1>{bannerTitle}</h1>
        </div>
    )
}

Banner.propTypes = {
  bannerTitle : PropTypes.string,
  backgroundImage : PropTypes.string.isRequired
}

export default Banner