import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./FormikForm.css";

const Formulario = () => {

    const [formularioEnviado, setFormularioEnviado] = useState(false);

    return (
        <>
            <Formik
                initialValues={{
                    correo: '',
                    contraseña: ''
                }} 
                onSubmit={(valores, {resetForm}) => {
                    resetForm();
                    console.log(valores);
                    console.log("Formulario Enviado!");
                    setFormularioEnviado(true);
                    setTimeout(() => setFormularioEnviado(false), 3000);
                }}
                validate={(valores) => {
                    let errores = {};
               
                    //Validación 'Correo'
                    if(!valores.correo) {
                        errores.correo = "Por favor ingrese un correo válido"
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo = 'El correo sólo puede contener letras, números, puntos, y guiones. Y debe contener un dominio.'
                    };

                    //Validación 'Contraseña'
                    if(!valores.contraseña) {
                        errores.contraseña = "Por favor ingrese una contraseña válida"
                    } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(valores.contraseña)){
                        errores.contraseña = 'La contraseña debe tener al menos 8 caracteres, y al menos una letra y un número.'
                    };

                    return errores;
                }}
            >
                {({errors}) => (
                    <Form className="formulario">
                    <h1 className='titulo'>Iniciar Sesión</h1>
                    <div>
                    <label htmlFor="correo">Correo</label>
                        <Field 
                            type="email" 
                            id="correo" 
                            name="correo" 
                            placeholder="Escriba su correo electrónico"
                        />
                        <ErrorMessage 
                            name='correo' 
                            component={() => (<div className='error'>{errors.correo}</div>)}
                        />
                    </div>
                    <div>
                        <label htmlFor="contraseña">Contraseña</label>
                        <Field 
                            type="password" 
                            id="contraseña" 
                            name="contraseña" 
                            placeholder="Escriba su contraseña"
                        />
                        <ErrorMessage 
                            name='contraseña' 
                            component={() => (<div className='error'>{errors.contraseña}</div>)}
                        />
                    </div>
                    <button type="submit">Entrar</button>
                    {formularioEnviado && <p className='exito'>Usuario loguedo con éxito!</p>}
                </Form>                
                )}
            </Formik>
        </>
    );
}

export default Formulario