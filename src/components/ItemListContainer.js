import './ItemListContainer.css'
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { useState } from 'react';
import { getProducts } from './products';

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    getProducts.then(res =>{
            setProducts(res)
        })

    return (
        <Container>
            <h3 className="greeting">{greeting}</h3>
            <ItemList products = {products}/>
        </Container>
            
     );
}
 
export default ItemListContainer;