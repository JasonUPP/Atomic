import React from 'react'
import { NavLink } from 'react-router-dom';

export const Main = ({imagenes}) => {
    return (
        <div className="main">
            <img src = {imagenes(`./Group 4032.png`).default } alt = "" className="astronauta" />
            <div> 
                <h1 className="textContainer">
                    <span className="blanco">Desarrolla todo </span><br />
                    <span className="naranja">tu POTENCIAL </span> <br/>
                    <span className="blanco">dentro del equipo </span>
                    <span className="naranja">ATOMIC</span><span className="blanco">LABS</span>
                </h1>        
                <NavLink exact to="/register" >
                    <button className="btn1">!Quiero ser parte!</button><br/>
                </NavLink>                           
            </div>        
        </div>  
    )
}
