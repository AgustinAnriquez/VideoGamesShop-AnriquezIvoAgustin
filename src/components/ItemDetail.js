import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import './ItemDetail.css'
import { Link } from "react-router-dom";
import CartContext from '../context/CartContext';

const ItemDetail = ({product}) =>{

    const {addItem} = useContext(CartContext)
    const [showItemCount, setShowItemCount] = useState(true)

    const handleAdd = (count) =>{
      setShowItemCount(false)
      addItem(product, count)
    }
    console.log(showItemCount);
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
        showItemCount ? <ItemCount stock={product.stock} onAdd={handleAdd}/> : 
        <Link to='/cart'>
          <Button className='goCartButton' variant="success">Ir al carrito</Button>
        </Link> 
      }
      </div>

    )
}

export default ItemDetail