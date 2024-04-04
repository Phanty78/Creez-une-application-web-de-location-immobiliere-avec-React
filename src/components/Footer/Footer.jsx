import "./footer.css"

const Footer = () => {

    return (
        <footer>
            <div className="black-logo">
                <img src="/logo_kaza_transparent.png" alt="logo kaza"/>
            </div>
            <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer