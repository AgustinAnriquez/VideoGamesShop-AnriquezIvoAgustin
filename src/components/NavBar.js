import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to='/'>VideogamesShop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/category/1'>Consolas</Nav.Link>
        <Nav.Link as={Link} to='/category/2'>Videojuegos</Nav.Link>
      </Nav>
      <Link to='/cart'>
        <CartWidget/>
      </Link>
      
    </Container>
  </Navbar> 

  
  );
}
export default NavBar;