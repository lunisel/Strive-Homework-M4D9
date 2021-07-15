import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";
import booksFantasy from "../data/fantasy.json";
import booksHistory from "../data/history.json";
import booksHorror from "../data/horror.json";
import booksRomance from "../data/romance.json";
import booksScifi from "../data/scifi.json";

const Comments = (props) => {
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
    <>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Row className="d-flex align-items-baseline py-2">
              <Col md={5}>
                <h3>Latest Releases</h3>
              </Col>
              <Col md={7}>
                <Form.Group
                  className="d-flex align-items-baseline"
                  controlId="formBasicEmail"
                >
                  <Form.Label id="search">Search</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search here"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              {books
                .filter((book) =>
                  book.title.toLowerCase().includes(searchQuery)
                )
                .map((book) => (
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    className="my-1"
                    key={book.asin}
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
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column align-items-center">
            <h3>Comments:</h3>
            {isSelected && <CommentArea b={selectedBook} />}
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
};

export default Comments;
