import { Col, Row, Card, Button } from "react-bootstrap";
import MyBadge from "./MyBadge";
import booksFantasy from "../data/fantasy.json";
import booksHistory from "../data/history.json";
import booksHorror from "../data/horror.json";
import booksRomance from "../data/romance.json";
import booksScifi from "../data/scifi.json";

const CheapBooks = () => {
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

  console.log(books);
  return (
    <div className="cheap-list mt-4">
      <h3>Read on low budget</h3>
      <Row className="mb-3">
        {books
          .filter((b) => b.price < 10)
          .slice(0, 6)
          .map((book) => (
            <Col
              xs={12}
              md={4}
              lg={2}
              style={{ height: "65vh" }}
              key={book.asin}
            >
              <Card className="h-100 position-relative d-flex flex-column align-items-between">
                <Card.Img
                  className="img-fluid"
                  src={book.img}
                  style={{ height: "70%" }}
                />
                <MyBadge text={book.price + "$"} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <div className="d-flex justify-content-between mt-1">
                    <Card.Text>{book.category}</Card.Text>
                    <div className="btn cart">
                      <i class="bi bi-cart-plus"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default CheapBooks;
