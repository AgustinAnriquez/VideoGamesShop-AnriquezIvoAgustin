import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import { getProduct } from "./products";
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [product, setProduct] = useState()

    getProduct(id).then(res =>{
        setProduct(res)
    })
    return (
        
        <Container>
            {product && <ItemDetail product={product} />}
        </Container>
            
     );
}
 
export default ItemDetailContainer;