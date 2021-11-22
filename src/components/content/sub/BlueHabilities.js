import React from 'react'

export const BlueHabilities = ({imagenes}) => {
    return (
        <div className="fourth">
          <center>
            <h1 style={{marginBottom:'5%'}}>
              <span className="blanco">¿POR QUÉ </span>
              <span className="naranja">ATOMIC?</span>
            </h1>  
            </center>        
            <div className="imgsContainer">

              <div className="sub1" >
                <img src = {imagenes(`./Group 4041.png`).default } alt='' />
                  <ul className="customUl blanco">
                    <div className="flex">
                      <img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq"  alt=''/>
                      <li className="customLi">
                        <span className="cardNegrita">Usamos las tecnológias <br/> más modernas</span>
                      </li>
                    </div>   

                    <div className="flex">
                      <img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" alt='' />
                      <li className="customLi">
                        <span className="cardNegrita">Innovamos y creamos <br/>proyectos retadores</span>
                      </li>
                    </div>                                 
                  </ul>   

              </div>

              <div className="subItem">
                <img src = {imagenes(`./Group 4042.png`).default } alt='' /> <br/>
  
                  <ul className="customUl blanco mt5">
                    <div className="flex">
                      <img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" alt='' />
                      <li className="customLi">
                        <span className="cardNegrita">!Trabajamos en equipo<br/> rumbo al éxito!</span>
                      </li>
                    </div>   

                    <div className="flex">
                      <img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" alt='' />
                      <li className="customLi">
                        <span className="cardNegrita">No tenemos código de<br/>vestimenta</span>
                      </li>
                    </div>                                 
                  </ul>   
        
              </div>

              <div className="subItem">
                <img src = {imagenes(`./Group 4043.png`).default } alt='' /> <br/>

                  <ul className="customUl blanco mt10">
                    <div className="flex">
                      <img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" alt=''/>
                      <li className="customLi">
                        <span className="cardNegrita">!Trabajamos en equipo<br/> rumbo al éxito!</span>
                      </li>
                    </div>   

                    <div className="flex">
                      <img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq"  alt=''/>
                      <li className="customLi">
                        <span className="cardNegrita">No tenemos código de<br/>vestimenta</span>
                      </li>
                    </div>                                 
                  </ul>   
       
              </div>            
            </div>              
        </div>
    )
}
