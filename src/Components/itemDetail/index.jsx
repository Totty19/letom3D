import { useContext, useState } from "react"
import { ItemCount } from "../itemCount"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";


const ItemDetail = ({id, nombre, img, precio, categoria }) => {
    const [ quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio, img, categoria
        }

        addItem(item, quantity)
    } 

    return ( 
        <div className="contCards">
            <div className="itemCard">
                <header>
                    <h2>{nombre}</h2>
                </header>
                <picture className="imgPadr">
                    <img src={img} alt={nombre} className="imgProd" />
                </picture>
                <section>
                    <p>Precio: ${precio}</p>
                </section>
                <footer>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className="btnCompr" >Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
            </div>
        </div>
    )
}

export { ItemDetail }