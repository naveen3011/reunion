import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">reunion</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Rent</Nav.Link>
            <Nav.Link href="#pricing">AboutUs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
