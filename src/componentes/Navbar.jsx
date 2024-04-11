import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar expand="md" bg="warning" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/desafio-happycake" className='text-decoration-none text-white'>Happy Cake
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Link to="/desafio-happycake" className='nav-link text-decoration-none text-white'>
            Home
            </Link>
            <Link to="/desafio-happycake/contacto" className='nav-link text-decoration-none text-white'>
            Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}