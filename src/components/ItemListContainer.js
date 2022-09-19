import './ItemListContainer.css'
import Container from 'react-bootstrap/Container';

const ItemListContainer = ({greeting}) => {
    return (
        <Container>
            <h3 className="greeting">{greeting}</h3>
        </Container>
            
     );
}
 
export default ItemListContainer;