import { Col, Container, Row } from "react-bootstrap";
import booksFantasy from "../data/fantasy.json";
import booksHistory from "../data/history.json";
import booksHorror from "../data/horror.json";
import booksRomance from "../data/romance.json";
import booksScifi from "../data/scifi.json";
import SingleBook from "./SingleBook";

const Category = (props) => {
  return (
    <Container>
      {props.location.pathname === "/category/fantasy" && (
        <>
          <hr />
          <h3 className="text-center">Fantasy</h3>
          <hr />
          <Row>
            {booksFantasy.map((book) => (
              <Col xs={6} md={2}>
                <SingleBook b={book} />
              </Col>
            ))}
          </Row>
        </>
      )}

      {props.location.pathname === "/category/history" && (
        <>
          <hr />
          <h3 className="text-center">History</h3>
          <hr />
          <Row>
            {booksHistory.map((book) => (
              <Col xs={6} md={2}>
                <SingleBook b={book} />
              </Col>
            ))}
          </Row>
        </>
      )}

      {props.location.pathname === "/category/horror" && (
        <>
          <hr />
          <h3 className="text-center">Horror</h3>
          <hr />
          <Row>
            {booksHorror.map((book) => (
              <Col xs={6} md={2}>
                <SingleBook b={book} />
              </Col>
            ))}
          </Row>
        </>
      )}

      {props.location.pathname === "/category/romance" && (
        <>
          <hr />
          <h3 className="text-center">Romance</h3>
          <hr />
          <Row>
            {booksRomance.map((book) => (
              <Col xs={6} md={2}>
                <SingleBook b={book} />
              </Col>
            ))}
          </Row>
        </>
      )}

      {props.location.pathname === "/category/scifi" && (
        <>
          <hr />
          <h3 className="text-center">Sci-fi</h3>
          <hr />
          <Row>
            {booksScifi.map((book) => (
              <Col xs={6} md={2}>
                <SingleBook b={book} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Category;
