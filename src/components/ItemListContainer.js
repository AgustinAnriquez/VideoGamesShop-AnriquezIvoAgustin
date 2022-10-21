import './ItemListContainer.css'
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from './products';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const { categoryId } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        if (categoryId) {
          getProductsByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((error) => console.warn(error))
        } else {
          getProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.warn(error))
        }
      }, [categoryId])

    return (
        <Container>
            <h3 className="greeting">{greeting}</h3>
            <ItemList products = {products}/>
        </Container>
            
     );
}
 
export default ItemListContainer;