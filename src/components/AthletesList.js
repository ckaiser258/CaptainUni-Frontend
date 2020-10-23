import React from "react";
import AthleteCard from "./AthleteCard";

function AthletesList({ athletes, removeAthlete }) {
  return athletes.map((athlete) => {
    return (
      <div>
        <AthleteCard
          image={athlete.image}
          name={athlete.full_name}
          removeAthlete={removeAthlete}
          id={athlete.id}
        />
      </div>
    );
  });
}

export default AthletesList;
