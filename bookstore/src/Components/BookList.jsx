import SingleBook from "./SingleBook";
import { Col, Container, Form, Row, Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { useState } from "react";
import booksFantasy from "../data/fantasy.json";
import booksHistory from "../data/history.json";
import booksHorror from "../data/horror.json";
import booksRomance from "../data/romance.json";
import booksScifi from "../data/scifi.json";

const BookList = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  let allBooks = [
    ...booksFantasy,
    ...booksHistory,
    ...booksHorror,
    ...booksRomance,
    ...booksScifi,
  ];
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
  let books = shuffle(allBooks);

  return (
    <Container>
      <Navbar className="pt-3 pb-2">
        <Container className="d-flex justify-content-center w-100">
          <Row className="w-100 d-flex justify-content-between">
            <Col xs={10} md={3}>
              <Navbar.Brand>BOOKSTORE</Navbar.Brand>
            </Col>
            <Col xs={1} md={6}>
              <Form.Group
                className="d-flex align-items-baseline"
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    console.log(searchQuery);
                  }}
                />
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

      <Row>
        {books
          .filter((book) => book.title.toLowerCase().includes(searchQuery))
          .slice(0, 60)
          .map((book) => (
            <Col
              xs={6}
              md={3}
              lg={2}
              className="my-1"
              key={book.title}
              style={{ height: "25rem" }}
              onClick={() => {
                if (isSelected === false) {
                  setSelectedBook(book);
                  setIsSelected(!isSelected);
                } else if (isSelected === true) {
                  setSelectedBook(book);
                }
              }}
            >
              <SingleBook b={book} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default withRouter(BookList);
