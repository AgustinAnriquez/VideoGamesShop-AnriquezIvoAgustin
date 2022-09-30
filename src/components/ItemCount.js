import React, { useState } from 'react';
import PlusWidget from './PlusWidget'
import MinusWidget from './MinusWidget'
import Button from 'react-bootstrap/Button'
import './ItemCount.css'

const ItemCount = ({stock}) =>{
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  const addCount = () =>{
    if(count < stock){
      setCount(count + 1)
    }
  }

  const disCount = () =>{
    if(count > 0){
      setCount(count - 1)
    }
  }


  return (
    <div className='countContainer'>
      <Button variant="outline-danger" onClick={disCount}><MinusWidget/></Button>
      <span className='count'>{count}</span>
      <Button variant="outline-primary" onClick={addCount}><PlusWidget/></Button>
    </div>
  );
}
export default ItemCount;