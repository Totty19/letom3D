import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import { CartItem } from "../../Components"

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='option'>Productos</Link>
            </div>
        )
    }

    return (    
        <div className="contCart">
            {cart.map(p => <CartItem key={p.id} {...p}/> ) }
            <h3 className='total'>Total: ${total()}</h3>
            <button onClick={() => clearCart()} className='btn lpm'>Limpiar carrito</button>
            <Link to='/checkout' className='btn orden'>Realizar orden</Link> 
        </div>
    )
}

export { Cart }