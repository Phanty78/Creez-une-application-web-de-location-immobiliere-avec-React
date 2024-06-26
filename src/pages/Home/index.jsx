import '../../style/main.css'
import './home.css'
import  data from '../../../data/data.json'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'

function Home() {
  return (
    <div className='home-page'>
      <Banner bannerTitle='Chez vous, partout et ailleurs' backgroundImage="/sea_background.jpg" />
      <div className='cards-container'>
        {data && data.map((card, index) => {
          return <Card key={card.id} id={card.id} title={card.title} cover={card.cover} lazy={index >= 6 ? 'lazy' : ''}/>
        })}
      </div>
    </div>
  );
}

export default Home