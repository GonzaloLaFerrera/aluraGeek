import './NavBar.css';
import Button from '../Button';

function NavBar(props) {
    return <div className='NavBar'>
        <div className='NavBar__izquierda'>
            <img className='NavBar__logoJoystick' src='/img/sports_esports_black_24dp 1.svg' alt='Icono del Logo'></img>
            <img className='NavBar__logoTexto' src='/img/Texto.svg' alt='Texto del Logo'></img>
            <img className='NavBar__barraBusqueda' src='/img/Barra_de_busqueda.png' alt='Img de barra de busqueda'></img>
        </div>
        
        <Button>Login</Button>

        {/* OPCION ORIGINAL */}
        {/* <img className='NavBar__logoJoystick' src='/img/sports_esports_black_24dp 1.svg' alt='Icono del Logo'></img>
        <img className='NavBar__logoTexto' src='/img/Texto.svg' alt='Texto del Logo'></img>
        <img className='NavBar__barraBusqueda' src='/img/Barra_de_busqueda.png' alt='Img de barra de busqueda'></img>
        <Button>Login</Button> */}
        
    </div>
}

export default NavBar;