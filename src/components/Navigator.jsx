import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigator() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto " style={{display:'flex',gap:'30px'}}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">login</Link>

          </Nav>
        </Container>
      </Navbar>
  
    </>
  );
}

export default Navigator;