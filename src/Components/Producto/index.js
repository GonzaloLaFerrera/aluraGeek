import "./Producto.css"

const Producto = (props) => {
    const { id, categoria, foto, nombre, precio, descripcion } = props.datos
 
    return <div className="producto"> {/* AQUÍ TENDRÍA QUE PASAR TODOS LOS VALORES/PARAMETROS POR PROPS */}
        <img className="producto__imagen" src={foto} alt={descripcion}></img>
        <p className="producto__nombre">{nombre}</p>
        <p className="producto__costo">{precio}</p>
        <a className="producto__ver">Ver producto</a>
    </div>

}

export default Producto