import { Item } from "../Item"


const ItemList = ({ products }) => {
    return (
        <div className="ContProd">
            {Array.isArray(products) && products.map(product => <Item key={product.id} {...product} />)}
        </div>
    )
}


export { ItemList } 