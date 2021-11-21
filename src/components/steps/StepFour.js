import React, { useEffect, useState } from 'react'
import { useButton } from '../../hooks/useButton';
import { Title } from '../content/Title'

export const StepFour = ({subtractStep, images, addStep, loadOn}) => {

    const [disabled, activateButton, disableButton] = useButton();

    const [check, setcheck] = useState(false);

    const checkChange = () => {        
        setcheck(!check);
    }

    useEffect(() => {
        if(check) activateButton();
        else disableButton();
    }, [check]);

    const handleClic = () => {        
        addStep();
    }

    const handleSeeTerms = () => {
        localStorage.setItem('type', 4);
        loadOn();
    }

    return (
        <div className="mt2">
            <div>
                <button type="button" className="transparent blanco" onClick ={subtractStep}>{'<'} Regresar</button>
                <Title
                    url = {images(`./Group 4025.png`).default} 
                    whiteT = {'TÉRMINOS Y '}
                    orangeT = {'CONDICIONES'}
                />

                <h4 className="blanco marT5">
                    Por favor revisa nuestros términos y condiciones para este servicio:
                </h4>

                <button type="button" className="transparent mt2" onClick={handleSeeTerms}>
                    <h6><a href="#" className="blanco">Consulta los Términos y Condiciones</a></h6>
                </button>    

                <div class="form-check">
                    <input class="form-check-input myCheck" type="checkbox" value={check} onChange={checkChange} id="flexCheckDefault" />
                    <label class="form-check-label blanco" for="flexCheckDefault">
                        Acepto los Términos y Condiciones
                    </label>
                </div>

                <div className="rigthA">
                        <button type="submit" disabled={disabled} className="btn btnO" onClick={handleClic} >
                            Enviar
                            <img src = {images(`./ic_lock_24px - gray.png`).default} className="marL20" />
                        </button>
                    </div>                  
            </div>
 
        </div>
    )
}