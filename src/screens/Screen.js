import React from 'react'
import { Conditions } from '../components/terms/Conditions';

let url;
let txt;
const txt1 = 'Te hemos enviado el código al número que nos proporcionaste';
const txt2 = 'Hemos validado el código';
const txt3 = 'Te estamos reenviando el codigo';

export const Screen = ({imagenes, tipo, loadOff}) => {    
    switch (tipo) {
        case '1':
            txt = txt1;
            url = imagenes(`./checkmark.png`).default;            
            break;
        case '2':
            txt = txt2;
            url = imagenes(`./checkmark.png`).default;
            break;
        case '3':
            txt = txt3;
            url = imagenes(`./Group 4029@2x.png`).default;
        break;
    
        default:
            break;
    }   
    debugger; 
    return (
        <div>
            {
                tipo === '4' 
                ?
                <Conditions url={imagenes(`./Group 4029.png`).default} loadOff= {loadOff} />
                :
                <div className="mainScreen">
                    <center className="itemsCentered">
                        <img src={url} />
                        <h6 className="blanco">
                            {txt}           
                        </h6>                           
                    </center>         
                </div>                   
            }         
        </div>

    )
}