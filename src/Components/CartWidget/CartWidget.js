import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-bootstrap"
import { CartContext } from "../../context/cartContext"
import { useContext } from "react"


const CartWidget = () => {

    const { totalQuantity } = useContext (CartContext)

    return (
        <div className='imgCart link'>
            <NavLink to='/cart'>
                <FontAwesomeIcon icon={faCartShopping} className="link"/>
                { totalQuantity } 
            </NavLink>
        </div>
    )
}

export default CartWidget
