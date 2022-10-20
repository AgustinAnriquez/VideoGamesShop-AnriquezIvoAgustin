import React, { useState } from 'react';
import PlusWidget from './PlusWidget'
import MinusWidget from './MinusWidget'
import Button from 'react-bootstrap/Button'
import './ItemCount.css'

const ItemCount = ({stock, onAdd}) =>{
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(1);

  const addCount = () =>{
    setCount(count + 1)
  }
  const disCount = () =>{
    setCount(count - 1)
  }

  const handleClick = () => onAdd(count);

  return (
    <div className='countContainer'>
        <div className='listCount'>
            <Button variant="outline-danger" disabled={count <= 1} onClick={disCount}><MinusWidget/></Button>
            <span className='count'>{count}</span>
            <Button variant="outline-primary" disabled={count >= stock} onClick={addCount}><PlusWidget/></Button>
        </div>
        <div className='listCount'>
          <Button variant="primary" disabled={stock <= 0} onClick={handleClick}>Agregar al carrito</Button>
        </div>
          
    </div>
  );
}
export default ItemCount;