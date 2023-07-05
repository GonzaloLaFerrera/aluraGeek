import "./Categoria.css"
import Producto from "../Producto"

const Categoria = (props) => {
    const { titulo } = props.data
    const  { productos } = props

    return <>{ productos.length > 0 &&
            <section className="categoria">
            <div className="categoria__upper">
                <h3 className="categoria__title">{titulo}</h3>
                <a className="categoria__verTodo">Ver Todo</a>
            </div>
            <div className="productos">
                {
                    productos.map((producto, index) => <Producto 
                        datos={producto}
                        key={index}
                    />)
                }
            </div>
        </section>
    }</>
    
}

export default Categoria