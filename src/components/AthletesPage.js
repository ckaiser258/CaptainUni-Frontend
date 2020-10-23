import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import AthletesList from "./AthletesList";

function AthletesPage() {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(false);

  const removeAthlete = (id) => {
    //Send DELETE request to api
    api.athletes.deleteAthlete(id)
    //Filter out removed athlete from state
    const newAthletes =  athletes.filter(athlete => {
      return athlete.id !== id
    })
    //Set new state
    setAthletes(newAthletes)
  }

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
    <h1>Loading...</h1>
  ) : athletes.length ? (
    <>
      <h1>Athletes</h1>
      <AthletesList athletes={athletes} removeAthlete={removeAthlete} />
    </>
  ) : (
    <div>
      <h1>You don't have any athletes yet.</h1>
      <br />
      <h1>Click "Add Athlete" to get started.</h1>
    </div>
  );
}

export default AthletesPage;
