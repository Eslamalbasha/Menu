import { useState } from "react";
import { Row, Navbar, Container, Nav, Form } from "react-bootstrap";

const NavBar = ({ filterSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = () => {
    filterSearch(searchValue);
    setSearchValue("");
  };
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
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <button onClick={() => onSearch()} className="btn-search">
                Search
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
