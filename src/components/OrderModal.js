import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderModal = ({showModal, onClose, onBuy, orderId}) =>{
    return(
        <Modal show={showModal} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Finalizar compra</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="Ingrese correo" />
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese nombre" />
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="number" placeholder="Ingrese telefono" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            {
                !orderId && (
                    <>
                        <Button variant="secondary" onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={onBuy}>
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