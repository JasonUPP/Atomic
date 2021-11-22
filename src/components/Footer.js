import React from 'react'

export const Footer = ({imagenes}) => {
    return (
        <footer className="footerCustom footerBody">
            <div className="flex">
                <h6 className="blanco">
                    @2020 AtomicLabs. Todos los derechos reservados.
                </h6>

                <div className="footerRigth flex">                              
                        <button className="transparent blanco">
                            <h6 className="blanco">Aviso de privacidad</h6>                            
                        </button>                    
                    <div className="innerMarg flex">
                        <img className="imgpq" src={imagenes('./linkedin.png').default} alt="" />
                        <img className="imgpq innerMarg2" src={imagenes('./twitter.png').default} alt="" />
                    </div>
                </div>          
            </div>
        </footer>
    )
}