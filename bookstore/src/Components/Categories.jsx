import { Col, Container, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import booksFantasy from "../data/fantasy.json";
import booksHistory from "../data/history.json";
import booksHorror from "../data/horror.json";
import booksRomance from "../data/romance.json";
import booksScifi from "../data/scifi.json";

const Categories = (props) => {
  return (
    <Container className="text-center">
      <hr />
      <h2 className="mt-4">Categories</h2>
      <hr />
      <Row className="categories row-col-5">
        {booksFantasy.slice(0, 1).map((book) => (
          <Col>
            <img
              src={book.img}
              onClick={() => props.history.push("/category/" + book.category)}
              style={{ height: "20rem" }}
              className="img-fluid"
            />
            <p onClick={() => props.history.push("/category/" + book.category)}>
              Fantasy
            </p>
          </Col>
        ))}

        {booksHistory.slice(0, 1).map((book) => (
          <Col>
            <img
              src={book.img}
              onClick={() => props.history.push("/category/" + book.category)}
              style={{ height: "20rem" }}
              className="img-fluid"
            />
            <p onClick={() => props.history.push("/category/" + book.category)}>
              History
            </p>
          </Col>
        ))}

        {booksHorror.slice(0, 1).map((book) => (
          <Col>
            <img
              src={book.img}
              onClick={() => props.history.push("/category/" + book.category)}
              style={{ height: "20rem" }}
              className="img-fluid"
            />
            <p onClick={() => props.history.push("/category/" + book.category)}>
              Horror
            </p>
          </Col>
        ))}

        {booksRomance.slice(0, 1).map((book) => (
          <Col>
            <img
              src={book.img}
              onClick={() => props.history.push("/category/" + book.category)}
              style={{ height: "20rem" }}
              className="img-fluid"
            />
            <p onClick={() => props.history.push("/category/" + book.category)}>
              Romance
            </p>
          </Col>
        ))}

        {booksScifi.slice(0, 1).map((book) => (
          <Col>
            <img
              src={book.img}
              onClick={() => props.history.push("/category/" + book.category)}
              style={{ height: "20rem" }}
              className="img-fluid"
            />
            <p onClick={() => props.history.push("/category/" + book.category)}>
              Sci-fi
            </p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default withRouter(Categories);
