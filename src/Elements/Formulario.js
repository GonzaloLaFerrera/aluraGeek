import styled, { css } from 'styled-components';

const colores = {
    borde:'#0075FF',
    error:'#bb2929',
    exito:'#1ed12d',
    error2: '#f66060'
}

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Label = styled.label`
    cursor: pointer;

    ${props => props.valido === 'false' && css`
        color: ${colores.error};
    `} 
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus {
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0 30px rgba(163, 163, 163, 0.4);
    }

    ${props => props.valido === 'true' && css`
        border: 3px solid transparent;
    `}

    ${props => props.valido === 'false' && css`
        border: 3px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none; /* para que no se vea siempre. Solo si tiene un error. */
    
    ${props => props.valido === 'true' && css`
        display: none;
    `}

    ${props => props.valido === 'false' && css`
        display: block;
    `}

`;

const ContenedorBotonCentrado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;

    &:hover {
        box-shadow: 3px 0 30px rgba(163, 163, 163, 1);
    }
`;

const MensajeExito = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: ${colores.exito};
`;

const MensajeError = styled.div`
    height: 45px;
    line-height: 45px;
    background: ${colores.error2};
    padding: 0 15px;
    border-radius: 3px;

    p {
        margin: 0;
    }

    b {
        margin-left: 10px;
    }
`;


export {
    Formulario, 
    Label, 
    GrupoInput, 
    Input, 
    LeyendaError,
    ContenedorBotonCentrado, 
    Boton,
    MensajeExito,
    MensajeError
};