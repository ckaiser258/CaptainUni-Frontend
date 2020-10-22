import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import AthletesList from "./AthletesList";

function AthletesPage() {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAthletes = () => {
    setLoading(true);
    api.athletes.getAthletes().then((res) => {
      setAthletes(res);
      setLoading(false);
    });
  };

  //Fetch user's athletes upon component mount
  //Cleanup upon unmount
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
      <h1>Hello</h1>
      <AthletesList athletes={athletes} />
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
