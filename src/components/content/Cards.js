import React from 'react'

export const Cards = ({imagenes}) => {
    return (
        <div>
            <section>
                <a href="#second" className="scroll-down" address="true">{''}</a>
                <p className="scrollP">Quiero saber más</p>
            </section> 

            <div className="second" id="second">
                <center>
                <h1>
                    <span className="blanco">SOMOS EL BRAZO DERECHO </span><br/>
                    <span className="naranja">DE LA TECNOLOGIA</span>
                </h1>          
                </center>
            </div>

            <div className="cardContainer">
                <div className="card card1" style= {{"width": "16rem"}}>
                <img className="card-img-top" src={imagenes('./Group 4035.png').default} alt="" />
                <div className="card-body">
                    <center>                        
                       <h3 className="naranja">EXPLORA</h3>         
                    </center>       
                    <ul>
                        <li>Innovación y <span className="cardNegrita">creación tecnológica</span></li>
                        <li><span className="cardNegrita">UI/UX</span></li>
                        <li><span className="cardNegrita">Innovación</span></li>                
                    </ul>              

                </div>
                </div>
                <div className="card cardtw" style= {{"width": "22rem"}}>
                <img className="card-img-top mediumCardBg" src={imagenes('./Group 4036.png').default} alt=""/>
                <div className="card-body mediumCardBg">
                    <center>                        
                       <h3 className="blanco">IMAGINA</h3>         
                    </center>
                    <ul className="card2">
                        <li><span className="cardNegrita">Estrategia</span> Digital</li>
                        <li>Big Data {'&'}<span className="cardNegrita"> Analysis</span></li>
                        <li><span className="cardNegrita">Consultoría</span> Tecnológica</li>                
                        <li><span className="cardNegrita">Reducción</span> de costos TI</li>
                    </ul>              
                </div>
                </div>          
                <div className="card card3" style= {{"width": "16rem"}}>
                <img className="card-img-top" src={imagenes('./Group 4037.png').default} alt="" />
                <div className="card-body">
                    <center>                        
                       <h3 className="naranja">CONQUISTA</h3>         
                    </center>
                    <ul>
                        <li>Desarrollo tecnológico <span className="cardNegrita">a la medida</span></li>
                        <li><span className="cardNegrita">Ciberseguridad</span></li>
                        <li><span className="cardNegrita">Servicios de la nube</span></li>                                  
                    </ul>    
                </div>
                </div>
            </div>            
        </div>
    )
}