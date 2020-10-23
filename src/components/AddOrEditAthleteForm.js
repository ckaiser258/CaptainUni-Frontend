import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

const { Header, Title, Body, Footer } = Modal;
const { Group, Label, Control, Row, Text } = Form;

function AddOrEditAthleteForm({ user, addAthlete, editAthlete, athleteName, athleteId }) {
  const [show, setShow] = useState(false);
  const [fields, setFields] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Set fields state to input values
  const handleChange = (e) => {
    addAthlete
      //If adding, set user id to current user
      ? setFields({ user_id: user.id, ...fields, [e.target.name]: e.target.value })
        //If editing, grab current athlete id
      : setFields({
          ...fields,
          id: athleteId,
          [e.target.name]: e.target.value,
        });
  };

  //editAthlete(fields) points to editAthlete(data) in AthleteProfile
  //addAthlete(fields) points to addAthlete(athlete) in AthletesPage
  const handleSubmit = (e) => {
    e.preventDefault();

    //If submit is coming from athletesPage
    //call addAthlete()
    //else call editAthlete()
    addAthlete ? addAthlete(fields) : editAthlete(fields);
    setFields({});
    handleClose();
  };

  return (
    <>
      {/* Either show pencil icon or Add Athlete button */}
      <div>
        {addAthlete ? (
          <Button variant="secondary" size="lg" onClick={handleShow}>
            Add Athlete
          </Button>
        ) : (
          <Button variant="outline" onClick={handleShow}>
            <i className="fas fa-edit fa-2x"></i>
          </Button>
        )}
      </div>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-lg">
        <Header closeButton>
          <Title>{addAthlete ? "Add Athlete" : `Edit ${athleteName}`}</Title>
        </Header>
        <Body>
          <Form onChange={handleChange}>
            <Row>
              {/* Name */}
              <Col>
                <Group>
                  <Label>Full Name</Label>
                  <Control
                    name="full_name"
                    type="text"
                    placeholder="Enter full name"
                  />
                </Group>
              </Col>

              {/* Image */}
              <Col>
                <Group>
                  <Label>Picture</Label>
                  <Control
                    name="image"
                    type="text"
                    placeholder="Enter link to picture"
                  />
                </Group>
              </Col>
            </Row>

            <Row>
              {/* Phone Number */}
              <Col>
                <Group>
                  <Label>Phone Number</Label>
                  <Control
                    name="phone_number"
                    type="number"
                    placeholder="Enter phone number"
                  />
                </Group>
              </Col>

              {/* Address */}
              <Col>
                <Group>
                  <Label>Address</Label>
                  <Control
                    name="address"
                    type="text"
                    placeholder="Enter address"
                  />
                </Group>
              </Col>
            </Row>

            <Row>
              {/* Height */}
              <Col>
                <Group>
                  <Label>Height</Label>
                  <Control
                    name="height"
                    type="text"
                    placeholder="Enter height"
                  />
                </Group>
              </Col>

              {/* Weight */}
              <Col>
                <Group>
                  <Label>Weight</Label>
                  <Control
                    name="weight"
                    type="number"
                    placeholder="Enter weight"
                  />
                </Group>
              </Col>
            </Row>

            <Row>
              {/* Birthday */}
              <Col>
                <Group>
                  <Label>Birth Date</Label>
                  <Control
                    name="birthday"
                    type="date"
                    placeholder="Enter birthday"
                  />
                </Group>
              </Col>

              {/* Position */}
              <Col>
                <Group>
                  <Label>Positions</Label>
                  <Control
                    name="positions"
                    type="text"
                    placeholder="Enter positions"
                  />
                  <Text className="text-muted">Separate with a comma.</Text>
                </Group>
              </Col>
            </Row>

            <Row>
              {/* High School */}
              <Col>
                <Group>
                  <Label>High School</Label>
                  <Control
                    name="high_school"
                    type="text"
                    placeholder="Enter high school"
                  />
                </Group>
              </Col>

              {/* Graduation Year */}
              <Col>
                <Group>
                  <Label>Graduation Year</Label>
                  <Control
                    name="graduation_year"
                    type="number"
                    min="2021"
                    placeholder="Enter graduation year"
                  />
                </Group>
              </Col>

              {/* GPA */}
              <Col>
                <Group>
                  <Label>GPA</Label>
                  <Control
                    name="gpa"
                    type="number"
                    min="0"
                    step="0.1"
                    placeholder="Enter GPA"
                  />
                </Group>
              </Col>
            </Row>
          </Form>
        </Body>

        <Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {addAthlete ? "Add Athlete" : "Save Changes"}
          </Button>
        </Footer>
      </Modal>
    </>
  );
}

export default AddOrEditAthleteForm;
