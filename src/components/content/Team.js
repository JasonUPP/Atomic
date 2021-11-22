import React from 'react'
import { MiniComp } from './auxiliary/MiniComp';
import { QuieroSerButton } from './QuieroSerButton';

export const Team = ({imagenes}) => {
    return (
        <div className="third">
            <center>
                <h1>
                    <span className="blanco">!TE ENCANTARÁ </span><br/>
                    <span className="naranja">TRABAJAR CON NOSOTROS!</span>
                </h1>          
                <img src = {imagenes(`./Group 4040.png`).default } alt='' />
                <div className="flex marL5">
                    <MiniComp word1='Contratación' word2='remota' />                
                    <MiniComp word1='Entrevista con el area de RH'/>                       
                    <MiniComp word1='Prueba ' word2='Práctica' />
                    <MiniComp word1='Entrevista' word2='técnica' arrow={true} />
                </div>
                <QuieroSerButton />
            </center>          
      </div>
    )
}
