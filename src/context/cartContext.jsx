import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext ({

    cart: []
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState ([])
        
        console.log (cart)

    const addItem = (item, quantity,) => {

        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item,quantity}])
        } else {
            console.error('El producto ya fué agregado')
        }
    }

    const removeItem = (itemId) => {

        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart ([])
    }

    const isInCart = (itemId) => {

        return cart.some(prod => prod.id === itemId)

    }

    const totalQuantity = () => {

        const cantidadTotal = cart.reduce ((total,item) => total + item.quantity, 0);

        return cantidadTotal;
    }

    const total = () => {

        const precioTotal = cart.reduce ((total, item) => total + item.precio * item.quantity, 0);

        return precioTotal
    }


    return (
        <CartContext.Provider value = {{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>

            {children}
            
        </CartContext.Provider>
    )

}