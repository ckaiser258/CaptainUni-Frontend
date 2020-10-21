import React from "react";
import AthleteCard from "./AthleteCard";

function AthletesPage({ athletes, loading }) {

  return loading ? (
    <h1>Loading...</h1>
  ) : athletes.length ? (
    athletes.map((athlete) => {
      return (
        <div>
          <AthleteCard
            image={athlete.image}
            name={athlete.full_name}
            id={athlete.id}
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
