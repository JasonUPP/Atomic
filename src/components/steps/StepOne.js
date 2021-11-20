import React, { useEffect, useState } from 'react';
import { useButton } from '../../hooks/useButton';
import { useForm } from '../../hooks/useForm';
import { Title } from '../content/Title';

export const StepOne = ({images, addStep}) => {

    const [formValues, handleInput] = useForm({
        nombre: '',
        apellidos: ''
    });

    const [disabled, activateButton, disableButton] = useButton();

    const [error, seterror] = useState(false);    

    const {nombre, apellidos} = formValues;

    useEffect(() => {
        if(nombre.length > 0 && apellidos.length > 0)
            activateButton();
        else disableButton();
    }, [nombre, apellidos])

    const onSubmit = (e) => {
        e.preventDefault();
        if(nombre.length < 5)
            seterror(true)         
        else {
            seterror(false);
            addStep();
        }
    }

    return (
        <div>
            <Title 
                url = {images(`./Group 4014.png`).default} 
                whiteT = {'TE QUEREMOS '}
                orangeT = {'CONOCER'}
            />
            <h4 className="blanco marT5">
                Queremos saber que eres tú, por favor ingresa los siguientes datos:
            </h4>

            <form onSubmit = {onSubmit} >
                <div className="form-group">
                    <label for="nombre" className="blanco">Nombre {'(s)'}</label>
                    <input 
                        type="text" className="form-control inpLimit" 
                        id="nombre" name="nombre"
                        autoComplete="off"
                        value= {nombre} onChange = {handleInput} 
                    />                    
                    {
                        error &&
                        <small id="emailHelp" className="naranja">El nombre deberá tener minimo 5 caracteres</small>
                    }
                </div>
                <div className="form-group">
                    <label for="apellidos" className="blanco">Apellidos</label>
                    <input 
                        type="text" className="form-control inpLimit" 
                        name="apellidos" autoComplete="off"
                        id="apellidos"
                        value= {apellidos} onChange= {handleInput}
                    />
                </div> 
                <br/>
                <div className="rigthA">
                    <button type="submit" class="btn btnO" disabled={disabled}>Enviar</button>
                </div>
            
            </form>           

        </div>
    )
}
