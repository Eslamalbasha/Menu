import { Container } from "react-bootstrap";
import NavBar from "./commonent/NavBar";
import Header from "./commonent/Header";
import Category from "./commonent/Category";
import CardItem from "./commonent/Card";
import { items } from "./data";
import { useState } from "react";

const App = () => {
  const [itemsData, setitemsData] = useState(items);
  //get all catergory uniqe
  const allCatergory = ["All", ...new Set(items.map((i) => i.category))];

  // Filter by category
  const filterCategory = (cat) => {
    if (cat === "All") {
      setitemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setitemsData(newArr);
    }
  };
  // Filter by Search form
  const filterSearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setitemsData(newArr);
    }
  };

  return (
    <div className="color-body font">
      <NavBar filterSearch={filterSearch} />
      <Container>
        <Header />
        <Category filterCategory={filterCategory} allCatergory={allCatergory} />
        <CardItem itemsData={itemsData} />
      </Container>
    </div>
  );
};

export default App;
