import { Container, Nav, Row, Col, Navbar, Form } from "react-bootstrap";

import { Link, withRouter } from "react-router-dom";

const NavBar = (props) => (
  <>
    <Navbar
      className={props.location.pathname === "/search" ? "d-none" : "pt-3 pb-2"}
    >
      <Container className="d-flex justify-content-center w-100">
        <Row className="w-100 d-flex justify-content-between">
          <Col xs={10} md={3}>
            <Navbar.Brand>BOOKSTORE</Navbar.Brand>
          </Col>
          <Col xs={1} md={6}>
            <Form.Group className="d-flex align-items-baseline">
              <Link to="/search" className="w-100">
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  /* value={searchQuery} */
                  /* onChange={(e) => setSearchQuery(e.target.value)} */
                />
              </Link>
            </Form.Group>
          </Col>
          <Col xs={1} md={3}>
            <Nav className="d-flex flex-row-reverse">
              <div className="nav-link">
                <i class="bi bi-heart"></i>
              </div>
              <div className="nav-link">
                <img
                  src="https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="nav-link">EN</div>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
    <Container
      className={props.location.pathname === "/search" ? "d-none" : "pt-3 pb-2"}
    >
      <Row className="d-flex justify-content-center mt-2">
        <Col xs={2} className="home">
          <Link
            to="/"
            className={
              props.location.pathname === "/" ? "active link-nav" : "link-nav"
            }
          >
            Home
          </Link>
        </Col>
        <Col xs={2} className="categories">
          <Link
            to="/categories"
            className={
              props.location.pathname === "/categories"
                ? "active link-nav"
                : "link-nav"
            }
          >
            Categories
          </Link>
        </Col>
        <Col xs={2} className="comments">
          <Link
            to="/comments"
            className={
              props.location.pathname === "/comments"
                ? "active link-nav"
                : "link-nav"
            }
          >
            Comments
          </Link>
        </Col>
      </Row>
    </Container>
  </>
);

export default withRouter(NavBar);