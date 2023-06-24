import './BannerHeader.css';

function BannerHeader() {
    return <header className='header'>
        <div className='header__content'>
            <h1 className='header__titulo'>Promos de Invierno</h1>
            <h3 className='header__subTitulo'>40% de descuento</h3>
            {/* acá va el botón */}
        </div>

    </header>
}

export default BannerHeader;