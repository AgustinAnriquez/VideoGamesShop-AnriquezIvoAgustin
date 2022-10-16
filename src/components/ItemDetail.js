import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import './ItemDetail.css'
import { Link } from "react-router-dom";

const ItemDetail = ({product}) =>{

    const [showItemCount, setShowItemCount] = useState(true)

    const onAdd = () =>{
      setShowItemCount(false)
    }

    return(
      <div className='itemDetail'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.pictureUrl} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          {product.description}
          </Card.Text>
        </Card.Body>
        </Card>
      {
        showItemCount ? <ItemCount stock={product.stock} onAdd={onAdd}/> : 
        <Link to='/cart'>
          <Button className='goCartButton' variant="success">Ir al carrito</Button>
        </Link> 
      }
      </div>

    )
}

export default ItemDetail