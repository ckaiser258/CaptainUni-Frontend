import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";

const { Item } = ListGroup;

function AthleteCard({ image, name }) {
  return (
    <Container>
      <Row>
          <Col>
        <img
          src={image}
          alt={name}
          style={{ maxWidth: "70%", maxHeight: "70%" }}
        />
        </Col>
        <Col>
        <h4>{name}</h4>
        </Col>
        <Col>
        <ListGroup horizontal>
          <Item variant="primary" action>
            View Profile
          </Item>
          <Item>Views</Item>
          <Item>Activity</Item>
          <Item>Colleges</Item>
          <Item>Advise</Item>
        </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default AthleteCard;
