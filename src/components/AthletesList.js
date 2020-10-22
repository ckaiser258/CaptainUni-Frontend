import React from "react";
import AthleteCard from "./AthleteCard";

function AthletesList({ athletes }) {
  return athletes.map((athlete) => {
    return (
      <div>
        <AthleteCard
          image={athlete.image}
          name={athlete.full_name}
          id={athlete.id}
        />
      </div>
    );
  });
}

export default AthletesList;
