import React from 'react'

export const Title = ({url, whiteT, orangeT}) => {
    return (
        <div className="flex contenido">
            <img src = {url } alt = ""/>
            <h1 className="marL5">
                <span className="blanco">{whiteT} </span>
                <span className="naranja">{orangeT}</span>
            </h1>
        </div>
    )
}
