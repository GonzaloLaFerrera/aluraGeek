import React, {useState} from "react";
import { Formulario, Label, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from "../../Elements/Formulario";
import ComponenteInput from "../Input/Input";

const FormularioContacto = () => {
    const [nombre, cambiarNombre] = useState({campo: '', valido: null});
    const [mensaje, cambiarMensaje] = useState({campo: '', valido: null});


    //Regex
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos. Con mín de 3 letras.
        mensaje: /^[a-zA-ZÀ-ÿ\s]{8,120}$/, // Letras y espacios, pueden llevar acentos. Con mín de 8 letras. Y máx de 120.
    }

    //Función onSubmit del Formulario
    const onSubmit = (e) => {
        e.prevent.default()

        if(nombre.valido === 'true' && mensaje.valido === 'true'){
            cambiarFormularioValido(true);
            cambiarNombre({campo:'', valido: null});
            cambiarMensaje({campo:'', valido: null});
        } else {
            cambiarFormularioValido(false);
            console.log('Algun campo no está validado')
        }
    }

    //Estado de validez del Formulario
    const [formularioValido, cambiarFormularioValido] = useState(null);

    return (
        <main>
            <Formulario action="" onSubmit={onSubmit}>
                <ComponenteInput
                    estado={nombre}
                    cambiarEstado={cambiarNombre} 
                    tipo='text' 
                    label='Nombre' 
                    placeholder='Juan Manuel De Rosas' 
                    name='nombre'
                    leyendaError='El nombre sólo puede contener letras y espacios'
                    expresionRegular={expresiones.nombre}
                />
                <ComponenteInput
                    estado={mensaje}
                    cambiarEstado={cambiarMensaje}  
                    tipo='text' 
                    label='Mensaje' 
                    placeholder='Escribe aquí tu mensaje' 
                    name='mensaje'
                    leyendaError='El mensaje sólo puede contener letras y espacios. Un mínimo de 8 letras, y un máx de 120.'
                    expresionRegular={expresiones.mensaje}
                />

                {formularioValido === false && <MensajeError>
                    <p>
                        <b>Error:</b> Por favor, rellena el formulario correctamente.
                    </p>
                </MensajeError>}
                <ContenedorBotonCentrado>
                    <Boton type="submit">Enviar Mensaje</Boton>
                    {formularioValido === true && <MensajeExito>Formulario enviado correctamente!</MensajeExito>}
                </ContenedorBotonCentrado>
            </Formulario>
        </main>
    )
}

export default FormularioContacto;