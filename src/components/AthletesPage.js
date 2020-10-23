import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import AthletesList from "./AthletesList";
import AddOrEditAthleteForm from "./AddOrEditAthleteForm";
import { Row, Col, Container } from "react-bootstrap";
import { Typography } from "@material-ui/core";

function AthletesPage({ user }) {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(false);

  const removeAthlete = (id) => {
    //Send DELETE request to api
    api.athletes.deleteAthlete(id);
    //Filter out removed athlete from state
    const newAthletes = athletes.filter((athlete) => {
      return athlete.id !== id;
    });
    //Set new state
    setAthletes(newAthletes);
  };

  const addAthlete = (athlete) => {
    //Send POST request to the backend
    api.athletes
      .createAthlete(athlete)
      .then((res) => res.json())
      .then((data) => {
        //Set the athlete id to the id of the response from the backend
        //Otherwise id will be undefined until refresh
        athlete.id = data.athlete.id;
        //Add new athlete to state
        setAthletes([...athletes, data.athlete]);
      });
  };

  const fetchAthletes = () => {
    setLoading(true);
    api.athletes.getAthletes().then((res) => {
      setAthletes(res);
      setLoading(false);
    });
  };

  //Fetch user's athletes upon component mount
  //Clean up upon unmount
  useEffect(() => {
    fetchAthletes();
    return () => {
      setAthletes([]);
    };
  }, []);

  //Render loading screen during fetch
  //Then render list of their athletes or a prompt if there aren't any
  return loading ? (
    <Typography variant="h3">Loading...</Typography>
  ) : athletes.length ? (
    <>
      <Row>
        <Col style={{marginTop: 20}}>
          <Typography variant="h2">Athletes</Typography>
        </Col>
        {/* Add form is either showing or button */}
        <Col style={{ marginTop: 50, marginBottom: 50 }}>
          <AddOrEditAthleteForm user={user} addAthlete={addAthlete} />
        </Col>
      </Row>
      <AthletesList athletes={athletes} removeAthlete={removeAthlete} />
    </>
  ) : (
    <div>
      <h1>You don't have any athletes yet.</h1>
      <br />
      <h1>Click "Add Athlete" to get started.</h1>
      {/* Add form is either showing or button */}
      <AddOrEditAthleteForm user={user} addAthlete={addAthlete} />
    </div>
  );
}

export default AthletesPage;
