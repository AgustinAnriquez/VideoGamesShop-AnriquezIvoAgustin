import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const NavBar = () => {
    return ( <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">VideogamesShop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Consolas</Nav.Link>
        <Nav.Link href="#pricing">Videojuegos</Nav.Link>
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar> 

  
  );
}
export default NavBar;