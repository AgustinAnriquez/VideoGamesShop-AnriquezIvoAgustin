import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";
import { MdRemoveShoppingCart } from "react-icons/md";
import './Cart.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { createOrder } from "./orders";
import OrderModal from "./OrderModal";

const buyerMock ={
  name: 'coderhouse',
  phone: '1112223334',
  email: 'coderhouse@mail.com'
}

 const Cart = () => {
   const {cart, total, removeItem, clear} = useContext(CartContext)
   const [user, setUser] = useState(buyerMock)
   console.log(cart, total);
   const[showModal, setShowModal] = useState(false)
   const[orderId, setOrderId] = useState()
   
   const handleRemove = (itemId) =>{
    removeItem(itemId)
   }

  const handleOpen = () =>{
    setShowModal(true)
   }

  const handleClose = () =>{
    setShowModal(false)
  }

  const handleBuy = async () =>{
    const newOrder = {
      buyer: buyerMock,
      items: cart,
      total
    }
    console.log(newOrder)
    const newOrderId = await createOrder(newOrder)
    setOrderId(newOrderId)
    clear()
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
                  <td><MdRemoveShoppingCart onClick={() => handleRemove(item.id)}/></td>
                 </tr>
              ))}
          </tbody>
        </Table>  
        <h3>Total: $ {total}</h3>
        <Button variant="success" onClick={handleOpen}>Finalizar compra</Button>
          </> 
        ):
        (
          <>
            <h3>No hay productos en el carrito</h3>
            <Link to='/'><Button variant="secondary">Ver productos</Button></Link>
          </>
        )
        }
        {
          showModal && 
          (
            <OrderModal showModal={showModal} onClose={handleClose} onBuy={handleBuy} orderId={orderId}/> 
          )
        }
        
      </Container>
    );
 }
  
 export default Cart;