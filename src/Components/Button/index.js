import "./Button.css";

function Button(props) {
    return <button className="boton" onClick={props.handleMostrarLogIn}>{props.children}</button>;
}

export default Button;