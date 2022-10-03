import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

const ItemDetail = ({product}) =>{
    return(
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><ItemCount stock={product.stock}/></ListGroup.Item>
        <ListGroup.Item><Button variant="primary">Agregar al carrito</Button></ListGroup.Item>
      </ListGroup>    
    </Card>
    )
}

export default ItemDetail