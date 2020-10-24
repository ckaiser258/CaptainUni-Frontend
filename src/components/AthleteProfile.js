import React, { useState, useEffect } from "react";
import { api } from "../services/api";
import AddOrEditAthleteForm from "./AddOrEditAthleteForm";
import { Row, Col, Container } from "react-bootstrap";
import {Typography} from "@material-ui/core"

function AthleteProfile({ id, fetchAthletes }) {
  const [athlete, setAthlete] = useState({});

  const fetchAthlete = () => {
    api.athletes.getAthlete(id).then((res) => {
      setAthlete(res.athlete);
    });
  };

  //Use props to set the current athlete upon component mount
  //to change state upon edit
  useEffect(() => {
    fetchAthlete();
    return () => {
      setAthlete({});
    };
  }, []);

  //Passed down to edit form and will pass params
  //back up here to state level
  const editAthlete = (data) => {
    api.athletes.editAthlete(data).then(setAthlete({ ...athlete, ...data }));
  };

  const handleImageError = (e) => {
    e.target.src = "https://www.w3schools.com/howto/img_avatar.png";
  };

  return (
    <>
      <Container>
        <Row style={{paddingTop: 20}}>
          <Col md="auto" style={{paddingLeft: 20}}>
            <Typography variant="h3">{athlete.full_name}</Typography>
          </Col>
          <Col md="auto" style={{paddingLeft: 0}}>
            {/* If form is false, renders a pencil button */}
            <AddOrEditAthleteForm
              athleteId={athlete.id}
              athleteName={athlete.full_name}
              editAthlete={editAthlete}
            />
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col>
            <img
              style={{ maxHeight: 250, maxWidth: 250 }}
              src={athlete.image || "https://www.w3schools.com/howto/img_avatar.png"}
              alt={athlete.full_name + "'s photo"}
              onError={handleImageError}
            />
          </Col>
          <Col md="auto">
            <p>
              <strong>Phone Number</strong> {athlete.phone_number}
            </p>
            <p>
              <strong>Address</strong> {athlete.address}
            </p>
            <p>
              <strong>Height</strong> {athlete.height}"
            </p>
            <p>
              <strong>Weight</strong> {athlete.weight}
            </p>
            <p>
              <strong>Birthdate</strong> {athlete.birthday}
            </p>
            <p>
              <strong>Position:</strong> {athlete.positions}
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
        <Typography variant="h4" style={{marginLeft: 20, float: "left"}}>Academics</Typography>
      </Row>
      <hr />
            <p>
              <strong>High School</strong> {athlete.high_school}
            </p>
            <p>
              <strong>Graduation Year</strong> {athlete.graduation_year}
            </p>
            <p>
              <strong>GPA</strong> {athlete.gpa}
            </p>
      </Container>
    </>
  );
}

export default AthleteProfile;
