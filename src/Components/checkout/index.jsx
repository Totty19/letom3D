import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { useContext, useState } from "react"
import { db } from "../../services/firebase/firebaseConfig"
import { CheckOutForm } from "../checkOutForm"
import { CartContext } from "../../context/cartContext"
import aproved from "../../assets/aproved.svg"
import chatLine from "../../assets/chat-line-de4c1.svg"

const CheckOut = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({ name, phone, Dni }) => {
        setLoading (true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, Dni },
                items: cart,
                total: total(),
                date: Timestamp.fromDate( new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map (prod => prod.id)

            const productsRef = collection(db, "itemColección")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids )))
            
            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                }
                else {
                    outOfStock.push ({id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders")
                
                const orderAdded = await addDoc (orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }
            else {
                console.error ("Hay productos que están fuera de stock!")
            }
            
        } 
        
        catch (error) {
            console.log(error)
        }

        finally {
            setLoading(false)
        }
    }

    if(loading) {

        return <h1 className="gerenador">Se está generando la órden...</h1>
    }

    if(orderId) {

        return (
            <div className="ContGenerator">
                <b className="subtitulo two">¡¡Ya casi terminas!!</b>
                <h3 className="subtitulo">Por favor mande su Dni y prosiga su compra en Instagram, nos vas a encontrar en <a href="https://www.instagram.com/copallicoco/">CocoCopalli</a></h3>
                <h1 className="generador">Muchas gracias por elegirnos y por su compra, que lo disfrutes!.</h1>
                <img src={chatLine} alt="" className="Fondo1" />
                <img src={aproved} alt="" className="Fondo2" />
            </div>
        )
    }

    return (
        <div className="formCont">
            <h1 className="checkOut">Generador de orden</h1>
            <CheckOutForm onConfirm={createOrder} />
        </div>
    )
}

export { CheckOut }