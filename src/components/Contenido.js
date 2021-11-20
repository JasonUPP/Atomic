import React, { useState } from 'react'
import { LastStep } from './steps/LastStep';
import { StepFour } from './steps/StepFour';
import { StepOne } from './steps/StepOne';
import { StepThree } from './steps/StepThree';
import { StepTwo } from './steps/StepTwo';

export const Contenido = ({step, subtractStep, images, addStep}) => {

    const [numero, setnumero] = useState('');
    
    return (
        <div>
            {step === 1 && <StepOne images = {images} addStep = {addStep}/>}

            {step === 2 && <StepTwo images = {images} subtractStep = {subtractStep} 
                addStep = {addStep} setnumero={setnumero} />}

            {step === 3 && <StepThree images = {images} subtractStep = {subtractStep} 
                addStep = {addStep} numero = {numero} />}

            {step === 4 && <StepFour images = {images} subtractStep = {subtractStep} addStep = {addStep} />}

            {step === 5 && <LastStep /> }

        </div>
    )
}