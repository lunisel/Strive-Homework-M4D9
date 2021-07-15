import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/MyNavbar";
import Home from "./Components/Home";
import Search from "./Components/Search";
import Registration from "./Components/Registration";
import Comments from "./Components/Comments";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route
          path="/"
          exact
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          path="/search"
          exact
          render={(routerProps) => <Search {...routerProps} />}
        />
        <Route
          path="/registration"
          exact
          render={(routerProps) => <Registration {...routerProps} />}
        />
        <Route
          path="/comments"
          exact
          render={(routerProps) => <Comments {...routerProps} />}
        />
      </Router>
    </div>
  );
}

export default App;
