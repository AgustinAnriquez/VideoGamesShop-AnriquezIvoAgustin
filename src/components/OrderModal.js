import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import { useState} from "react";
import './OrderModal.css'

const OrderModal = ({showModal, onClose, onBuy, orderId}) =>{
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');

    function onNameChange(evt) {
        setName(evt.target.value);
    }
    function onPhoneChange(evt) {
        setPhone(evt.target.value);
    }
    function onEmailChange(evt) {
        setEmail(evt.target.value);
    }
    function onEmail2Change(evt) {
        setEmail2(evt.target.value);
    }
    const isDisabled = !(name !== '' && phone !== '' && email !== '' && email2 !== '' && email === email2) 
    return(
        <Modal show={showModal} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Finalizar compra</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalContainer">
            <Checkout className="checkoutContainer"/>
            <Form.Group className="formContainer" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese nombre" onChange={(evt) => onNameChange(evt)}/>
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="number" placeholder="Ingrese telefono" onChange={(evt) => onPhoneChange(evt)}/>
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="Ingrese correo" onChange={(evt) => onEmailChange(evt)}/>
              <Form.Label>Repetir correo</Form.Label>
              <Form.Control type="email" placeholder="Ingrese correo" onChange={(evt) => onEmail2Change(evt)}/>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            {
                !orderId && (
                    <>
                        <Button variant="secondary" onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={onBuy} disabled={isDisabled}>
                            Comprar
                        </Button>
                    </>
                   
                )
            }
            {
                orderId && (
                    <>
                        <Alert variant='success'>
                            Su orden de compra es ${orderId}
                        </Alert>
                        <Link to='/'>
                        <Button variant='success'>
                            Seguir comprando
                        </Button>
                        </Link>
                        
                    </>
                )
            }
            
          </Modal.Footer>
        </Modal>
    )
}

export default OrderModal;