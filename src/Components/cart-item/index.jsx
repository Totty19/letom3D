import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'



export const CartItem = ({ precio, quantity, img, id }) => {

    const {removeItem} = useContext (CartContext)

    return (
        <div className='productsContainer'>
            <picture> <img src={img} className='imagen' alt='pic' /> </picture>
            <section><p className='text'>Precio por unidad: {precio}</p></section>
            <section><p className='text'>Cantidad: {quantity}</p></section>
            <button onClick={() => removeItem(id)}> Remove item </button>
        </div>
    )
}