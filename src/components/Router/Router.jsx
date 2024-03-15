import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../../pages/Home/index.jsx'
import Apropos from '../../pages/a-propos/'
import FicheLogement from '../../pages/fiche-logement/'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Error from '../Error/Error.jsx'

function RouterComponent (){
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/a-propos' element={<Apropos />} />
                <Route path='/fiche-logement' element={<FicheLogement />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default RouterComponent