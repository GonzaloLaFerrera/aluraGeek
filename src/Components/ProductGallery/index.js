import "./ProductGallery.css";

function ProductGallery() {
    return <div className="productGallery__container">
        <div className="productGallery__upper">
            <h3 className="productGallery__title">Star Wars</h3>
            <a className="productGallery__verTodo">Ver Todo</a>
        </div>
        <div className="productGallery__lower">
            <div className="productGallery__containerProducto">
                <img className="productGallery__imagenProducto" src="/img/StarWars/starwars_yoda.svg"></img>
                <p className="productGallery__nombreProducto">Producto XYZ</p>
                <p className="productGallery__costoProducto">$600,00-.</p>
                <a className="productGallery__verProducto">Ver producto</a>
            </div>                 
        </div>
    </div>

}

export default ProductGallery;