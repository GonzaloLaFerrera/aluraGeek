import './BannerHeader.css';
import Button from '../Button';

function BannerHeader() {
    return <header className='header'>
        <div className='header__content'>
            <h1 className='header__titulo'>Promos de Invierno</h1>
            <h3 className='header__subTitulo'>40% de descuento</h3>
            <Button>Ver Consolas</Button>
        </div>

    </header>
}

export default BannerHeader;