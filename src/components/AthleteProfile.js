import React, { useState, useEffect } from "react";
import EditAthleteForm from "./EditAthleteForm";

function AthleteProfile({currentAthlete}) {
  const [athlete, setAthlete] = useState({})

  //Use props to set the current athlete upon component mount 
  //to change state upon edit
  useEffect(() => {
    setAthlete(currentAthlete)
    return () => {
      setAthlete({})
    }
  }, [currentAthlete])

  return (
    <>
      {/* Edit form is either showing or pencil button */}
      <EditAthleteForm athleteName={athlete.name} />
      <div>
        <h1>{athlete.name}</h1>
        <img src={athlete.image} alt={athlete.name + "'s photo"} />
      </div>
      <div>
        <strong>Phone Number</strong> {athlete.phone_number}
        <strong>Address</strong> {athlete.address}
        <strong>Height</strong> {athlete.height}
        <strong>Weight</strong> {athlete.weight}
        <strong>Birthdate</strong> {athlete.birthday}
        <strong>Position:</strong> {athlete.positions}
      </div>
      <div>
        <strong>High School</strong> {athlete.high_school}
        <strong>Graduation Year</strong> {athlete.graduation_year}
        <strong>GPA</strong> {athlete.gpa}
      </div>
    </>
  );
}

export default AthleteProfile;
