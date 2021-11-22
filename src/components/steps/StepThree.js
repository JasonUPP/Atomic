import React, { useEffect, useState } from 'react'
import { useButton } from '../../hooks/useButton';
import { useForm } from '../../hooks/useForm';
import { generarBody, getCodigo } from '../../petition/manageCode';
import { Title } from '../content/Title'

export const StepThree = ({subtractStep, images, addStep, numero, setedit, loadOn, loadOff}) => {
    
    const [formValues, handleInput] = useForm({
        codigo: '',
    });
    const [diferente, setDiferente] = useState(false);

    const [disabled, activateButton, disableButton] = useButton();

    const {codigo} = formValues;

    useEffect(() => {
        setedit(false);
    }, []);

    useEffect(() => {
        if(codigo.length === 5 ) activateButton();
        else disableButton();
    }, [codigo])

    const onSubmit = (e) => {
        e.preventDefault();
        debugger;
        const c = getCodigo();        
        if(c === codigo){
            localStorage.setItem('type', 2);  
            loadOn();
            setTimeout(loadOff, 2000);
            addStep();     
        }
        else{
            setDiferente(true);
        }

    }

    const handleEdit = () => {
        localStorage.setItem('numero', null);
        setedit(true);
        subtractStep();
    }

    const handleBack = () => {
        localStorage.setItem('numero', null);        
        subtractStep();
    }

    const handleReenvio = () => {
        localStorage.setItem('type', 3);
        loadOn();
        try{
            fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: generarBody({numero})
            })
            .then(res => res.json())
            .then(() => {
                loadOff();
                localStorage.setItem('type', 1);
                loadOn();
                setTimeout(loadOff, 2000);
            });
        }
        catch(e){
            console.log(e);
        }     
    }

    return (
        <div className="mt2">
            <button type="button" className="transparent blanco" onClick ={handleBack}>{'<'} Regresar</button>
            <Title
                url = {images(`./Group 4024.png`).default} 
                whiteT = {'CÓDIGO DE '}
                orangeT = {'VERIFICACIÓN'}
            />

            <h4 className="blanco mt2">
                Te enviamos un SMS al número: <br/>
                {`+52 ${numero.substring(0,2)} ${numero.substring(2, 6)} ${numero.substring(6, 10)}`}
                <button className="transparent marL5" onClick={handleEdit}>
                    <img src={images(`./Group 4026.png`).default} alt='' />                    
                </button>

            </h4>

            <h6 className="blanco">
                Ingresa el código de verificación:             
            </h6>   

            <br/>
            <form onSubmit = {onSubmit} >
                <div className="form-group">
                    <label htmlFor="codigo" className="blanco">Código de verificación</label>
                    <input 
                        type="text" 
                        className= {diferente ? 'form-control codeE': "form-control inpLimitClear" }
                        id="codigo" name="codigo"
                        autoComplete="off"
                        value= {codigo} onChange = {handleInput} 
                        onKeyPress = {(e)=>{if (!/[0-9]/.test(e.key))e.preventDefault()}}
                    />
                    {
                        diferente &&
                        <small id="emailHelp" className="naranja">El código no coincide</small>
                    }                 
                </div>
                <br/>
                <h6 className="blanco flex">
                    ¿No recibiste el código? 
                    <button type="button" className="transparent blanco" onClick={handleReenvio}>
                        <h6>Reenviar código</h6>
                    </button>          
                </h6>   
                <div className="rigthA">
                    <button type="submit" disabled={disabled} className= "btn btnO" >
                        Validar código
                    </button>
                </div>            
            </form> 

        </div>
    )
}