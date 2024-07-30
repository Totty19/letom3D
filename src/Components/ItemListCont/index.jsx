
import { useEffect, useState } from "react"
import { ItemList } from "../ItemList"
import { useParams } from "react-router-dom"
import { db } from '../../services/firebase/firebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListCont = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collecctionRef = categoryId
            ? query(collection(db, 'itemCollections'), where('categoria', '==', categoryId))
            : collection(db, "itemCollections")

        getDocs(collecctionRef)
            .then(response =>   {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return(
        <div className="ContPadre">
            <ItemList products={ products } categoryId={ categoryId } />
        </div>
    )
}

export { ItemListCont }; 