import React from 'react'

export const Conditions = ({url, loadOff}) => {


    return (
        <div className="terms">
            <button className="btn btn-danger close" onClick={loadOff}>
                X
            </button>            
            <center className="cuadCenter">
                <div className="mainCuad">
                    <img src={url} className="mt2" alt='' />
                    <h4>Términos y Condiciones</h4>
                    <p className="detalle">
                        Para llevar a cabo las finalidades descritas
                        en el presente Aviso de Privacidad, utilizaremos
                        datos de indenticficación, contacto y laborales.
                        <br/><br/>
                        Los datos personales que AtomicLabs recaba de usted,
                        serán utilizados para las siguientes finalidades que son 
                        necesarias para ofrecer nuestros servicios:
                    </p>

                    <ul>
                        <li className="detalle mb5">
                        AtomicLabs requiere utilizar sus datos personales para incluirlo en la base de datos que utilizamos para prestar los 
                        servicios de reclutamiento, selección de personal administración de nómina y prestación de servicios.
                        AtomicLabs labs utilizará sus datos personales para evaluar si es posible colocarlo en las vacantes de empleo 
                        de la compañía o de los clientes de atomix y para conocer sus aptitudes, antecedentes y referencias laborales.
                        En este sentido, AtomicLabs utilizará sus datos personales para ponerse en contacto con usted en relación a las 
                         vacantes para las cuales podría ser candidato.
                        </li>
                    </ul>
                </div>                
            </center>

        </div>
    )
}