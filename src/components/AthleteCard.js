import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const { Item } = ListGroup;

function AthleteCard({ image, name, id, removeAthlete }) {

  //removeAthlete(id) comes from AthletesPage level
  //Calls on deleteAthlete from api.js
  const handleDelete = () => {
    removeAthlete(id)
  }

  return (
    <>
      <Container>
        <hr />
        <Row>
          <Col>
            <Link to={`athlete/${id}`}>
              <img
                src={image}
                alt={name}
                style={{ maxWidth: "70%", maxHeight: "70%" }}
              />
              (Details)
            </Link>
            </Col>
            <Col><p onClick={handleDelete}>(Remove)</p></Col>
          <Col>
            <h4>{name}</h4>
          </Col>
          <Col>
            <ListGroup horizontal>
              <Link to={`athlete/${id}`}>
                <Item variant="primary" action>
                  View Profile
                </Item>
              </Link>
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
