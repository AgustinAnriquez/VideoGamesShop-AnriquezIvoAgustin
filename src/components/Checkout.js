import { useContext} from "react";
import CartContext from "../context/CartContext";
const Checkout = () => {
    const {cart, total} = useContext(CartContext)
    return ( 
    <div>
        <h4>Productos</h4>
        <ul>
        {cart.map((item) =>(
                <li key={item.id}>
                  <span>{item.quantity} ${item.price} {item.title}</span>
                </li>
              ))}
        </ul>
        <h4>Total: ${total}</h4>
    </div>
    );
}
 
export default Checkout;