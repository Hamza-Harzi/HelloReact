
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MyWebSite</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </header>;
};




// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }

export default Header;
