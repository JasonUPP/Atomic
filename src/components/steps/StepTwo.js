import React, { useEffect } from 'react'
import { useButton } from '../../hooks/useButton';
import { useForm } from '../../hooks/useForm';
import { generarBody } from '../../petition/manageCode';
import { Title } from '../content/Title'

export const StepTwo = ({subtractStep, images, addStep, setnumero, edit, loadOn, loadOff}) => {  
    const [formValues, handleInput] = useForm({
        numero: '',
    });

    const [disabled, activateButton, disableButton] = useButton();

    const {numero} = formValues;

    useEffect(() => {
        setnumero(numero);                                
        if(numero.length === 10 ) activateButton();
        else disableButton();
    }, [numero]);

    const onSubmit = (e) => {
        e.preventDefault();  
        localStorage.setItem('numero', numero);  
        localStorage.setItem('type', 1);  
        loadOn();
        try{
            fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: generarBody({numero})
            })
            .then(res => res.json())
            .then(() => loadOff());
        }
        catch(e){
            console.log(e);
        }    
        addStep();        
    }    

    return (
        <div className="mt2">
            <button type="button" className="transparent blanco" onClick ={subtractStep}>{'<'} Regresar</button>
            <Title
                url = {images(`./Group 4023.png`).default} 
                whiteT = {edit ? 'EDITA TU ' : 'VALIDA TU '}
                orangeT = {'CELULAR'}
            />            

            <h4 className="blanco mt2">
                Necesitamos validar tu número para continuar               
            </h4>      
            <h5 className="blanco">
                Ingresa tu número a 10 digitos y te enviaremos un código SMS.              
            </h5>  

            <form onSubmit = {onSubmit} >
                <div className="form-group">
                    <label htmlFor="numero" className="blanco">Número de Celular</label>
                    <input 
                        type="text" className="form-control inpLimitClear" 
                        id="numero" name="numero"
                        autoComplete="off"
                        onKeyPress = {(e)=>{if (!/[0-9]/.test(e.key))e.preventDefault()}}
                        value= {numero} onChange = {handleInput} 
                    />                    
                </div>
                <br/>
                <div className="rigthA">
                    <button type="submit" disabled= {disabled} className="btn btnO">Continuar</button>
                </div>            
            </form>   
        </div>
    )
}