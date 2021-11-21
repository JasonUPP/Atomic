import React, { useEffect, useState } from 'react'
import { LastStep } from './steps/LastStep';
import { StepFour } from './steps/StepFour';
import { StepOne } from './steps/StepOne';
import { StepThree } from './steps/StepThree';
import { StepTwo } from './steps/StepTwo';

export const Contenido = ({step, subtractStep, images, addStep, loadOn, loadOff}) => {  

    const [numero, setnumero] = useState('');
    const [edit, setedit] = useState(false);

    useEffect(() => {
        const n = localStorage.getItem('numero');        
        if(numero === undefined || numero === null || numero === '')
            setnumero(n);
    }, []);
    
    return (
        <div>
            {step === 1 && <StepOne images = {images} addStep = {addStep}/>}

            {step === 2 && <StepTwo images = {images} subtractStep = {subtractStep} 
                addStep = {addStep} setnumero={setnumero} edit= {edit} 
                loadOn= {loadOn} loadOff = {loadOff}/>}

            {step === 3 && <StepThree images = {images} subtractStep = {subtractStep} 
                addStep = {addStep} numero = {numero} setedit={setedit}  
                loadOn= {loadOn} loadOff = {loadOff}/>}

            {step === 4 && <StepFour images = {images} subtractStep = {subtractStep} addStep = {addStep} loadOn= {loadOn} />}

            {step === 5 && <LastStep /> }

        </div>
    )
}