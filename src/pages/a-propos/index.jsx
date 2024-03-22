import Banner from "../../components/Banner/Banner"
import './a-propos.css'
import engagements from '../../../data/engagements.json'
import Collapse from "../../components/Collapse/Collapse"


function Apropos() {
    return (
        <div className="a-propos">
            <Banner backgroundImage="/mountain_background.jpg"/>
            {engagements.map((engagement) =>
                <Collapse key={engagement.id} title={engagement.title} text={engagement.text} />
            )}
        </div>
    )
}

export default Apropos