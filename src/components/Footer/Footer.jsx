import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="black-logo">
                <img className="letter-and-house" src="/letter_k.png" alt="lettre K" />
                <img className="letter-and-house" src="/house.png" alt="logo d'une maison" />
                <img className="letter-and-house" src="/letter_s.png" alt="lettre S" />
                <img className="letter-and-house" src="/letter_a.png" alt="lettre A" />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer