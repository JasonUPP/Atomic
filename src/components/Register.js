import React, { useEffect, useState } from 'react'
import { useLoading } from '../hooks/useLoading';
import { useStep } from '../hooks/useStep';
import { Screen } from '../screens/Screen';
import { Contenido } from './Contenido';
import { Footer } from './Footer';
import { ImageRight } from './ImageRight';
import { ProgressBar } from './ProgressBar';
import './register.css'

const imagenes = require.context('../assets/Paquete Atomic' , true);
const default1 = imagenes(`./Group 4015.png`).default;
const default2 = imagenes(`./Group 4019.png`).default;
const default3 = imagenes(`./Group 4017.png`).default;
const default4 = imagenes(`./Group 4018.png`).default;

const checked = imagenes(`./Group 4016.png`).default;

export const Register = () => {
    const {state, addStep, subtractStep} = useStep();
    const [loading, loadOn, loadOff, tipo] = useLoading();

    const [url, seturl] = useState('');
    const [percent, setpercent] = useState(20);

    const [img1, setimg1] = useState(default1);
    const [img2, setimg2] = useState(default2);
    const [img3, setimg3] = useState(default3);
    const [img4, setimg4] = useState(default4);

    useEffect(() => {
        switch (state) {
            case 1:
                setpercent(20);
                seturl(imagenes(`./Group 4033.png`).default); 
                setimg1(default1);
                setimg2(default2);
                setimg3(default3);
                setimg4(default4);          
                break;
            
            case 2:
                setpercent(43);
                seturl(imagenes(`./Group 4034.png`).default);
                setimg1(checked);
                setimg2(imagenes(`./Group 4020.png`).default);
                setimg3(default3);
                setimg4(default4);
                break;

            case 3:
                setpercent(65);
                seturl(imagenes(`./Group 4034.png`).default);
                setimg1(checked);
                setimg2(checked);
                setimg3(imagenes(`./Group 4021.png`).default);
                setimg4(default4);
                break;
  
            case 4:
                setpercent(85);
                seturl(imagenes(`./Group 4038.png`).default);
                setimg1(checked);
                setimg2(checked);
                setimg3(checked);
                setimg4(imagenes(`./Group 4022.png`).default);
                break;

              
            case 5:
                setpercent(100);
                seturl(imagenes(`./Group 4039.png`).default);
                setimg1(default1);
                setimg2(default2);
                setimg3(default3);
                setimg4(default4);
                break;

            default:
                break;
        }
    }, [state]);


    return (
        <div className="background">
            {
                loading
                ?
                <Screen imagenes = {imagenes} tipo = {tipo} loadOff={loadOff} />
                :
                <div>
                    <br/>
                    <div className="flex mb1">
                        <div className="itemOne" >

                            { (state > 0 && state <5) &&
                            <ProgressBar percent= {percent}
                                img1={img1} img2 = {img2}  img3= {img3} img4 = {img4}  
                            />
                            }
                            <Contenido 
                                step = {state} 
                                subtractStep = {subtractStep} 
                                images = {imagenes} 
                                addStep={addStep} 
                                loadOn = {loadOn}
                                loadOff = {loadOff}
                            />
                            
                        </div>
                        <div>
                            <ImageRight url ={url} />
                        </div>             
                    </div>   
                    <Footer imagenes = {imagenes} />   
                </div>                
            }      
        </div>
    )
}