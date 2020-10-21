import React, { useState, useEffect } from "react";
import { api } from "../services/api";
import AthleteCard from "./AthleteCard";

function AthletesPage() {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.athletes.getAthletes().then((res) => {
      setAthletes(res);
      setLoading(false);
    });
    return () => {
      setAthletes([]);
      setLoading(true);
    };
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : athletes.length ? (
    athletes.map((athlete) => {
      return (
        <div style={{ display: "inline-block" }}>
          <AthleteCard
            image={athlete.image}
            name={athlete.full_name}
            key={athlete.id}
          />
        </div>
      );
    })
  ) : (
    <div>
      <h1>You don't have any athletes yet.</h1>
      <br />
      <h1>Click "Add Athlete" to get started.</h1>
    </div>
  );
}

export default AthletesPage;
