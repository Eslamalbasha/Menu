import { Row, Col } from "react-bootstrap";
import { Zoom } from "react-reveal";

const Category = ({ filterCategory, allCatergory }) => {
  // to filter by catergory
  const onFilter = (cat) => {
    filterCategory(cat);
  };
  return (
    <Zoom>
      <Row className="my-2 mb-5">
        <Col sm="12" className="d-flex justify-content-center">
          {allCatergory.length >= 1
            ? allCatergory.map((cat) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <button
                      onClick={() => onFilter(cat)}
                      style={{ border: "1px solid #b45b35" }}
                      className="btn mx-2"
                    >
                      {cat}
                    </button>
                  </div>
                );
              })
            : null}
        </Col>
      </Row>
    </Zoom>
  );
};

export default Category;
