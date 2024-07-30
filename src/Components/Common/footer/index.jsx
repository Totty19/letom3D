import { faCreditCard, faLock, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import email from '../../../assets/correo.png'
import ubic from '../../../assets/logoUbic.png'

const Footer = () => {
    return (
        <>
            <div className="topFooter">
                <section className="contTop">
                    <FontAwesomeIcon icon={faTruckFast}/>
                    <h6>Enviamos tu compra</h6>
                    <p>Entregas a todo el pais</p>
                </section>
                <section className="contTop">
                    <FontAwesomeIcon icon={faCreditCard}/>
                    <h6>Nuestros metodos de pagos</h6>
                    <p>trasnferencias / efectivo</p>
                </section>
                <section className="contTop">
                    <FontAwesomeIcon icon={faLock}/>
                    <h6>Compra con seguridad</h6>
                    <p>tus datos siempre protegidos</p>
                </section>
            </div>

            <footer className="footer">
                <div className='contFooter'>
                    <p>Sitio desarrollado con React.Js y diseñado con Sass</p>
                    <p>Está adaptada para cualquier dispositivo</p>
                    <p>Desarrollada y diseñada por Tomas Gil Aguiar | 2024</p>
                    <div className="ubicYCont">
                        <h5><img src={ubic} alt="" />Argentina | Entre Rios | Concepcion del urugay</h5>
                        <h5><img src={email} alt="" />tomiexe16@gmail.com</h5>
                    </div>
                </div>
            </footer>
        </>
    );
};

export {Footer}