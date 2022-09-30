import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";
import { getProduct } from "./products";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [product, setProduct] = useState()


    useEffect(() =>{
        getProduct(id).then(res =>{
            setProduct(res)
        })
    }, [id])

    
    return (
        
        <Container>
            {product && <ItemDetail product={product} />}
        </Container>
            
     );
}
 
export default ItemDetailContainer;