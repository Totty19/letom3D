import { faWhatsapp, faInstagram }from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import letom from '../../assets/letom3d.jpeg'
import { Link } from 'react-router-dom';

const ContacUbic = () => {
    return (
        <>
            <div className="ContUbic">
                <img src={letom} alt="" />
                <div class="boxCont">
                    <h2>Contactanos aqui!</h2>
                    <div className='ContRedes'>
                        <Link className='Redes' to='https://w.app/3PMyhV'><FontAwesomeIcon icon={faWhatsapp} /></Link>
                        <Link className='Redes' to='https://www.instagram.com/letom.3d/'><FontAwesomeIcon icon={faInstagram} /></Link>
                    </div>
                    <form action="https://formsubmit.co/tomiexe16@gmail.com" method="post" class="cajaCont">
                        <label class="lbl">
                            <input type="email" name="Email" required placeholder="Escriba su email"/>
                        </label>
                        <label class="lbl">
                            <input type="text" name="Asunto" required placeholder="Escriba el asunto del correo"/>
                        </label>
                        <textarea class="text" name="" id="" cols="30" rows="10" placeholder="Deje su mensaje para Letom 3D aqui"></textarea>
                        <div className="ContBtn">
                            <input type="reset" value="Limpiar" class="btn"/>
                            <input type="submit" value="Enviar" class="btn"/>   
                        </div>
                    </form>
                </div>
                <div>
                    <iframe className="Iframe" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1139.5415981585268!2d-58.260571370233855!3d-32.47778637409245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDI4JzM5LjYiUyA1OMKwMTUnMzcuNCJX!5e0!3m2!1ses!2sar!4v1686520139917!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}

export {ContacUbic} 