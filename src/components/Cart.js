import { useContext } from "react";
import CartContext from "../context/CartContext";
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";
import { MdRemoveShoppingCart } from "react-icons/md";
import './Cart.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


 const Cart = () => {
   const {cart, total, removeItem} = useContext(CartContext)
   console.log(cart, total);
   const handleClick = (itemId) =>{
    removeItem(itemId)
   }
    return ( 
      <Container>
        {cart.length > 0 ? 
        (
          <>
          <Table striped="columns">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
              {cart.map((item) =>(
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td><MdRemoveShoppingCart onClick={() => handleClick(item.id)}/></td>
                 </tr>
              ))}
          </tbody>
        </Table>  
        <h3>Total: $ {total}</h3>
          </> 
        ):
        (
          <>
            <h3>No hay productos en el carrito</h3>
            <Link to='/'><Button variant="secondary">Ver productos</Button></Link>
          </>
        )
        }
        
        
      </Container>
    );
 }
  
 export default Cart;