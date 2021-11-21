import React from 'react'

export const Footer = ({imagenes}) => {
    return (
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
    )
}