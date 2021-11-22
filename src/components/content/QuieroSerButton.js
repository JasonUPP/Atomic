import React from 'react'
import { NavLink } from 'react-router-dom';

export const QuieroSerButton = () => {
    return (
        <center>
            <NavLink exact to="/register" >
                <button className="btn2">!Quiero ser parte!</button><br/>         
            </NavLink>
        </center>
    )
}