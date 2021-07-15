import { Container } from "react-bootstrap";
import CheapBooks from "./CheapBooks";
import Jumbotron from "./Jumbotron";

const Home = (props) => {
  return (
    <Container>
      <Jumbotron />
      <CheapBooks />
    </Container>
  );
};

export default Home;
