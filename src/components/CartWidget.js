import './CartWidget.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import Badge from 'react-bootstrap/Badge';


const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    return (
    <>
        <AiOutlineShoppingCart className="iconCart"/>
        {totalQuantity > 0 &&
        (
            <Badge pill bg="success">{totalQuantity}</Badge> 
        )
        } 
    </> 
    
    );
}
 
export default CartWidget;