import { Row, Col, Card } from "react-bootstrap";
// import { Image1 } from "../assets/1.png";

const CardItem = () => {
  return (
    <Row>
      <Col sm="12" className="mb-3">
        <Card
          className="d-flex flex-row"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <Card.Img
            className="img-item"
            variant="top"
            src="../../public/assets/1.png"
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              <div className="item-title">Breakfast</div>
              <div className="item-price">50$</div>
            </Card.Title>
            <Card.Text className="py-2 ">
              <div className="item-description">
                {" "}
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CardItem;
