import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const ItemDetail = ({product}) =>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.pictureUrl} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <ItemCount stock={product.stock}/>
        </Card.Body>
      </Card>
    )
}

export default ItemDetail