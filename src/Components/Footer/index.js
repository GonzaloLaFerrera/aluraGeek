import "./Footer.css"
import Links from "../Links"
import ContactForm from "../ContactForm"
import { Container } from "@mui/material"

const Footer = () => {
    return <footer className="footer">
        <div className="footer__logo">
            <img className='footer__logoJoystick' src='/img/sports_esports_black_24dp 1.svg' alt='Icono del Logo'></img>
            <img className='footer__logoTexto' src='/img/Texto.svg' alt='Texto del Logo'></img>
        </div>
        <div>
            <Links />
        </div>
        <div>
            <ContactForm />
        </div>
    </footer>
}

export default Footer