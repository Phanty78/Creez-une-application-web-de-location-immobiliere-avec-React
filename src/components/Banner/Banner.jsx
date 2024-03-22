import './banner.css'

function Banner({bannerTitle, backgroundImage}) {
    return (
        <div className='home-banner'>
        <img src={backgroundImage} alt={bannerTitle}/> 
        <div className='overlay'></div>
        <h1>{bannerTitle}</h1>
      </div>
    )
}

export default Banner