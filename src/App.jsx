import { Container } from "react-bootstrap";
import NavBar from "./commonent/NavBar";
import Header from "./commonent/Header";
import Category from "./commonent/Category";
import CardItem from "./commonent/Card";

function App() {
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
        <Category />
        <CardItem />
      </Container>
    </div>
  );
}

export default App;
