import "./ClientLogIn.css";
import { Box, TextField } from "@mui/material";
import Button from "../Components/Button";
import { useState } from "react";
import { InputAdornment } from "@mui/material";
import { ErrorSharp, Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";


const ClientLogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState({
        correo:{
            error: false,
            message: "",
        }
    });

    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
        return regex.test(password);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateEmail(email) && validatePassword(password)) {
            console.log({email, password})
        } else {
            console.log("Información incorrecta vieja!")
        }
        /* if(validateEmail(email)){
            setError({
                error: false,
                message: "Si señor",
            });
            console.log("Email Correcto buachin!!!!")
        } else {
            setError({
                error: true,
                message: "Email Incorrecto papu!",
            });
        } */
    };

    //ORIGINAL
    const instantValidation = (e) => {
        e.preventDefault();
        if(validateEmail(email)){
            setError({
                error: false,
                message: "Si señor",
            });
        } else {
            setError({
                error: true,
                message: "Email Incorrecto papu!",
            });
        }
    };
    
    //Mail y Password
    /* const instantValidation = (e) => {
        e.preventDefault();
        if(validateEmail(email)) {
            setError({
                correo: {
                    error: false,
                    message: "Si señor",
                },
            });
        } else if (validatePassword(password)){
            setError({
                contraseña: {
                    error: false,
                    message: "Si señor",
                },
            });
        } else if (validateEmail(email) == false) {
            setError({
                correo:{
                    error: true,
                    message: "Email Incorrecto papu!",
                }
            });
        } else if (validatePassword(password) == false) {
            setError({
                contraseña:{
                    error: true,
                    message: "Contraseña Incorrecto papu!",            
                }
            });
        }
    }; */


    
    /* const [errors, setError] = useState({
        email: {
            error: false,
            message: "llega el consoleLog"
        }
    }) */


    /* const emailValidation = (email) => {
        // expresion regular para validar email
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; 
        return regex.test(email);
      }; */


    /* function validarEmail(email) {
        if(emailRegex(email) === true) {
            return {
                email: {
                    error: false,
                    message:'Mail Correcto',
                }                
            }
        } else {
            return {
                email: {
                    error: true,
                    message: "El formato del email no es el correcto."
                },
            }
        }
    } */    
    

    return <>{/* <form className="clientLogIn__container"> */}
        <h1 className="clientLogIn__titulo">Iniciar Sesión</h1>
        <Box 
        component="form"
        onSubmit={handleSubmit}>
            <TextField 
                id="email" 
                label="Escriba su correo electrónico" 
                variant="filled" 
                type="email"
                fullWidth 
                required
                onChange={(e) => {
                    /* console.log(e.target.value) */
                    setEmail(e.target.value)
                }}
                value={ email }
                helperText={error.message}
                error={error.error}
                onBlur={instantValidation}

                /* error={ errors.email.error } */
                /* helperText={ errors.email.error ? errors.email.message : ''} */ 
                /* onBlur={(e) => {
                    setError(e.target.value)
                }} */
            />

            <TextField 
                id="password" 
                label="Escriba su contraseña" 
                variant="filled" 
                type="password"
                fullWidth 
                required
                onChange={(e) => {
                    /* console.log(e.target.value) */
                    setPassword(e.target.value)
                }}
                value={ password }
                helperText={error.message}
                error={error.error}
                onBlur={instantValidation}

                /* error={ errors.email.error } */
                /* helperText={ errors.email.error ? errors.email.message : ''} */ 
                /* onBlur={(e) => {
                    setError(e.target.value)
                }} */
            />

            <Button type="submit">Entrar</Button>
        </Box>
        
        
    
    </>

}

export default ClientLogIn;