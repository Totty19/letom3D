import { faCheck }from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import letom from '../../assets/letom3d.jpeg'
const Nosotros = () => {
    return (
        <div className="ContNosotros">
            <div className='contImgs'>
                <img src={letom} alt="" className='fondoCoc' />
            </div>
            <h1>Sobre Nosotros</h1>
            <h3 className='texto'><FontAwesomeIcon icon={faCheck} />Transformamos tus ideas en realidad con nuestra innovadora línea de productos impresos en 3D.</h3>
            <h3 className='texto'><FontAwesomeIcon icon={faCheck} />Ofrecemos una variedad de soportes únicos para PlayStation, celulares, y otros dispositivos, además de sahumerios y llaveros personalizados.</h3>
            <h3 className='texto'><FontAwesomeIcon icon={faCheck} />Cada objeto es diseñado con atención al detalle, combinando funcionalidad y creatividad. </h3>
            <h3 className='texto'><FontAwesomeIcon icon={faCheck} />Descubre cómo nuestros productos pueden agregar un toque especial a tu vida diaria.</h3>
        </div>
    )
}

export { Nosotros }