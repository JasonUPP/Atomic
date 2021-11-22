import React from 'react'

export const MiniComp = ({word1, word2, arrow}) => {
    return (
        <div className="marL10">
            <div className="flex">
                <h5 className="blanco">  
                    {word1} <br/>
                    {word2}
        
                </h5>
                {
                !arrow &&
                <h1 className="naranja marL20">
                    <span>&#8594;</span>                     
                </h1>                
                }
            </div>
        </div>
    )
}
