import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const { Item } = ListGroup;

function AthleteCard({ image, name, id, removeAthlete }) {
  //removeAthlete(id) comes from AthletesPage level
  //Calls on deleteAthlete from api.js
  const handleDelete = () => {
    removeAthlete(id);
  };

  const handleImageError = (e) => {
    e.target.src = "https://www.w3schools.com/howto/img_avatar.png";
  };

  return (
    <>
      <Container>
        <hr />
        <Row>
          <Col>
            <Link to={`athlete/${id}`}>
              <img
                src={image || "https://www.w3schools.com/howto/img_avatar.png"}
                alt={name}
                style={{ maxWidth: "70%", maxHeight: "70%" }}
                onError={handleImageError}
              />
            </Link>
          </Col>

          <Col>
            <Link to={`athlete/${id}`} style={{ color: "gray" }}>
              (Details)
            </Link>
          </Col>

          <Col>
            <p style={{ cursor: "pointer", color: "gray" }} onClick={handleDelete}>
              (Remove)
            </p>
          </Col>
          <Col>
            <h4>{name}</h4>
          </Col>
          <Col>
            <ListGroup horizontal>
              <Item>Views</Item>
              <Item>Activity</Item>
              <Item>Colleges</Item>
              <Item>Advise</Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AthleteCard;
