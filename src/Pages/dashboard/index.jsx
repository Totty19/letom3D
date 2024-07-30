import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
const Dashboard = () => {
    
    return (
        <div className='ContInicio'>
            <div className='contImg'> 
                <img src="https://firebasestorage.googleapis.com/v0/b/letom3d-a3439.appspot.com/o/Sonic.jpeg?alt=media&token=14d25069-51c7-4fc3-8e67-af71f764fcad" alt="img3d" className='fondo' />
                <div className="ConTitulos">
                    <h1><b>Hola!</b></h1>
                    <h2>Bienvenid@ a nuestra pagina</h2>
                    <h3>De objetos en 3D</h3>
                    <a href="/category/soporte">Visita nuestros productos <FontAwesomeIcon icon={faRightToBracket} /></a>
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/letom3d-a3439.appspot.com/o/soporteAlto.jpeg?alt=media&token=9f306999-15a7-4a56-b79b-39dd80a4c281" alt="img3d" className='fondo' />
            </div>
        </div>
    )
}

export {Dashboard}