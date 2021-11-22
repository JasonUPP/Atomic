import React from 'react'

export const BlueTable = ({imagenes}) => {
    return (
        <div className="five">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">CARACTERISTÍCAS</th>
                  <th scope="col" className="cent">OTROS</th>
                  <th scope="col" className="cent fontBig" style={{backgroundColor:'#E9F1F6'}} >ATOMIC</th>                
                </tr>
              </thead>
              <tbody>              
                <tr>
                  <td>Equipo inclusivo, honesto y auténtico</td>                
                  <td className="cent"><img alt='' src={imagenes(`./ic_check_tiny.png`).default }  className="imgpq" /></td>
                  <td className="cent" style={{backgroundColor:'#E9F1F6'}}><img alt='' src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>
                </tr>
                <tr>
                  <td>Puntualidad es nuestro segundo nombre</td>
                  <td className="cent"><img alt='' src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>           
                  <td className="cent" style={{backgroundColor:'#E9F1F6'}}><img alt='' src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>
                </tr>
                <tr>
                  <td>Siempre innovamos en nuestros productos</td>
                  <td className="cent"><img alt='' src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>
                  <td className="cent" style={{backgroundColor:'#E9F1F6'}}><img alt='' src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>        
                </tr>
                <tr>
                  <td>Te ayudamos a crecer e implementar nuevos conocimientos</td>
                  <td className="cent"></td>
                  <td className="cent" style={{backgroundColor:'#E9F1F6'}}><img alt='' src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>                
                </tr>
                <tr>
                  <td>Nos preocupamos por tu bienestar</td>
                  <td className="cent"></td>
                  <td className="cent" style={{backgroundColor:'#E9F1F6'}}><img alt='' src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>              
                </tr>
                <tr>
                  <td>El respeto es una parte fundamental</td>
                  <td className="cent"></td>
                  <td className="cent" style={{backgroundColor:'#E9F1F6'}}><img alt='' src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>          
                </tr>
              </tbody>
            </table>
        </div>
    )
}
