import React from 'react';
import { NavLink } from 'react-router-dom';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const imagenes = require.context('./assets/Paquete Atomic' , true);

export const App = () => {
  return (
    <div className="background">
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

      <section>
        <a href="#second" class="scroll-down" address="true"></a>
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
          <img className="card-img-top" src={imagenes('./Group 4035.png').default} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              <ul>
                <li>Innovación y <span className="cardNegrita">creación tecnológica</span></li>
                <li><span className="cardNegrita">UI/UX</span></li>
                <li><span className="cardNegrita">Innovación</span></li>                
              </ul>              
            </p>
          </div>
        </div>
        <div className="card" style= {{"width": "22rem"}}>
          <img className="card-img-top mediumCardBg" src={imagenes('./Group 4036.png').default} alt="Card image cap"/>
          <div className="card-body mediumCardBg">
            <p className="card-text">
            <p className="card-text card2">
              <ul>
                <li><span className="cardNegrita">Estrategia</span> Digital</li>
                <li>Big Data {'&'}<span className="cardNegrita"> Analysis</span></li>
                <li><span className="cardNegrita">Consultoría</span> Tecnológica</li>                
                <li><span className="cardNegrita">Reducción</span> de costos TI</li>
              </ul>              
            </p>
            </p>
          </div>
        </div>          
        <div className="card card3" style= {{"width": "16rem"}}>
          <img className="card-img-top" src={imagenes('./Group 4037.png').default} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              <ul>
                  <li>Desarrollo tecnológico <span className="cardNegrita">a la medida</span></li>
                  <li><span className="cardNegrita">Ciberseguridad</span></li>
                  <li><span className="cardNegrita">Servicios de la nube</span></li>                                  
               </ul>    
            </p>
          </div>
        </div>
      </div>


      <div className="third">
        <center>
          <h1>
            <span className="blanco">!TE ENCANTARÁ </span><br/>
            <span className="naranja">TRABAJAR CON NOSOTROS!</span>
          </h1>          
          <img src = {imagenes(`./Group 4040.png`).default } />
          <h1 className="blanco">aqui van las flechas de recursos humanos</h1>
          <NavLink exact to="/register" >
            <button className="btn2">!Quiero ser parte!</button><br/>          
          </NavLink>

        </center>          
      </div>

      <div className="bgcblue">
        <div className="fourth">
          <center>
            <h1 style={{marginBottom:'5%'}}>
              <span className="blanco">¿POR QUÉ </span>
              <span className="naranja">ATOMIC?</span>
            </h1>  
            </center>        
            <div className="imgsContainer">

              <div className="sub1" >
                <img src = {imagenes(`./Group 4041.png`).default } />
                <p className="blanco">
                  <ul className="customUl">
                    <div className="flex">
                      <img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" />
                      <li className="customLi">
                        <span className="cardNegrita">Usamos las tecnológias <br/> más modernas</span>
                      </li>
                    </div>   

                    <div className="flex">
                      <img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" />
                      <li className="customLi">
                        <span className="cardNegrita">Innovamos y creamos <br/>proyectos retadores</span>
                      </li>
                    </div>                                 
                  </ul>   
                </p>
              </div>

              <div className="subItem">
                <img src = {imagenes(`./Group 4042.png`).default } /> <br/>
                <p className="blanco mt5" >
                  <ul className="customUl">
                    <div className="flex">
                      <img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" />
                      <li className="customLi">
                        <span className="cardNegrita">!Trabajamos en equipo<br/> rumbo al éxito!</span>
                      </li>
                    </div>   

                    <div className="flex">
                      <img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" />
                      <li className="customLi">
                        <span className="cardNegrita">No tenemos código de<br/>vestimenta</span>
                      </li>
                    </div>                                 
                  </ul>   
                </p>
              </div>

              <div className="subItem">
                <img src = {imagenes(`./Group 4043.png`).default } /> <br/>
                <p className="blanco mt10">
                  <ul className="customUl">
                    <div className="flex">
                      <img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" />
                      <li className="customLi">
                        <span className="cardNegrita">!Trabajamos en equipo<br/> rumbo al éxito!</span>
                      </li>
                    </div>   

                    <div className="flex">
                      <img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" />
                      <li className="customLi">
                        <span className="cardNegrita">No tenemos código de<br/>vestimenta</span>
                      </li>
                    </div>                                 
                  </ul>   
                </p>
              </div>            
            </div>          
    
        </div>

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
                  <td className="cent"><img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>
                  <td className="cent" style={{backgroundColor:'#E9F1F6'}}><img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>
                </tr>
                <tr>
                  <td>Puntualidad es nuestro segundo nombre</td>
                  <td className="cent"><img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>           
                  <td className="cent" style={{backgroundColor:'#E9F1F6'}}><img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>
                </tr>
                <tr>
                  <td>Siempre innovamos en nuestros productos</td>
                  <td className="cent"><img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>
                  <td className="cent" style={{backgroundColor:'#E9F1F6'}}><img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>        
                </tr>
                <tr>
                  <td>Te ayudamos a crecer e implementar nuevos conocimientos</td>
                  <td className="cent"></td>
                  <td className="cent" style={{backgroundColor:'#E9F1F6'}}><img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>                
                </tr>
                <tr>
                  <td>Nos preocupamos por tu bienestar</td>
                  <td className="cent"></td>
                  <td className="cent" style={{backgroundColor:'#E9F1F6'}}><img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>              
                </tr>
                <tr>
                  <td>El respeto es una parte fundamental</td>
                  <td className="cent"></td>
                  <td className="cent" style={{backgroundColor:'#E9F1F6'}}><img src={imagenes(`./ic_check_tiny.png`).default } className="imgpq" /></td>          
                </tr>
              </tbody>
            </table>
        </div>

        <center>
        <NavLink exact to="/register" >
          <button className="btn2">!Quiero ser parte!</button><br/>         
        </NavLink>
 
        </center>
      </div>

      <footer className="footerCustom footerBody">
        <div className="flex">
          <h6 className="blanco">
            @2020 AtomicLabs. Todos los derechos reservados.
          </h6>

          <div className="footerRigth flex">          
              <a href="#"><h6 className="blanco">Aviso de privacidad</h6></a>
              <div className="innerMarg flex">
                <img className="imgpq" src={imagenes('./linkedin.png').default} alt="Card image cap" />
                <img className="imgpq innerMarg2" src={imagenes('./twitter.png').default} alt="Card image cap" />
              </div>


          </div>

          
        </div>
      </footer>
    </div>
  );
}