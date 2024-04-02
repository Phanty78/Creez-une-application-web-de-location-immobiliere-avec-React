import "./footer.css"

const Footer = () => {

    let actualYear = new Date().getFullYear()

    return (
        <footer>
            <div className="black-logo">
                <img src="/logo_kaza_transparent.png" alt="logo kaza"/>
            </div>
            <p>© {actualYear} Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer