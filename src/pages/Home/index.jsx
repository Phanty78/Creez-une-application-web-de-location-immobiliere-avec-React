import '../../style/main.css'
import './home.css'
import '../../components/Cards/Cards'
import  data from '../../../data/data.json'
import Cards from '../../components/Cards/Cards'
import { useEffect } from 'react'
import Banner from '../../components/Banner/Banner'

function Home() {
  return (
    <div className='home-page'>
      <Banner bannerTitle='Chez vous, partout et ailleurs' backgroundImage="/sea_background.jpg" />
      <div className='cards-container'>
        {data.map((card) => 
          <Cards key={card.id} title={card.title} cover={card.cover}/>
        )}
      </div>
    </div>
  )
}

export default Home