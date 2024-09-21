import { Row, Navbar, Container, Nav, Form } from "react-bootstrap";

const NavBar = () => {
  return (
    <Row>
      <Navbar expand="lg " bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">New Restaurant</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control type="text" placeholder="Search" className="me-2" />
              <button className="btn-search">Search</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
