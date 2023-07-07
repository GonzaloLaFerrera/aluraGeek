import { TextField } from "@mui/material"
import Button from "../Button"

const ContactForm = () => {
    return <form>
        <TextField 
            id="name" 
            label="Nombre" 
            variant="filled" 
            fullWidth 
            required
        />
        
        <TextField 
            id="text" 
            label="Escribe tu mensaje" 
            variant="filled" 
            fullWidth 
            multiline 
            rows={5} 
            margin="normal" 
            required
        />
        
        <Button>Enviar mensaje</Button>
    </form>
}

export default ContactForm