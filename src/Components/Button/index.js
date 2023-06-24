import "./Button.css";

function Button(props) {
    return <button className="boton">{props.children}</button>;
}

export default Button;