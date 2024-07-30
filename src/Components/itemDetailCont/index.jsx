import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { ItemDetail } from "../itemDetail"
import { useParams } from "react-router-dom"

const ItemDetailCont = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'itemCollections', itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
        }, [itemId]);

    return (
        <div className="ContPadreDetalle">
            <ItemDetail {...product}/>
        </div>
    )
}

export { ItemDetailCont }