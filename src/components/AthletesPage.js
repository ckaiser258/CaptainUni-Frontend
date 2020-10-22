import React from "react";
import AthletesList from "./AthletesList";

function AthletesPage({ athletes, loading }) {
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
