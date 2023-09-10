import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
function HeaderComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pedidos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/clientes" className="nav-link">Clientes</Link>
            <Link to="/productos" className="nav-link">Productos</Link>
            <Link to="/categorias" className="nav-link">Categorias</Link>
            <Link to="/pedidos" className="nav-link">Pedidos</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;