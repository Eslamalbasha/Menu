import { Row, Col } from "react-bootstrap";

const Category = ({ filterCategory, allCatergory }) => {
  // to filter by catergory
  const onFilter = (cat) => {
    filterCategory(cat);
  };
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        {allCatergory.length >= 1 ? (
          allCatergory.map((cat) => {
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
        ) : (
          <h4>لا يوجد تصنيفات لاان</h4>
        )}
      </Col>
    </Row>
  );
};

export default Category;
