import { Link } from "react-router-dom";

const Item = ({id, nombre, img, precio}) => {
    return ( 
        <div className="contCards" 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className="itemCard" >
                <header>
                    <h2>{nombre}</h2>
                </header>
                <picture>
                    <img src={img} alt={nombre} className="imgProd" />
                </picture>
                <section>
                    <p>Precio: ${precio}</p>
                </section>
                <footer>
                    <Link to={`/letom3d/item/${id}`} className="btn det">Ver detalles</Link>
                </footer>
            </div>
        </div>
    )
}

export { Item }; 