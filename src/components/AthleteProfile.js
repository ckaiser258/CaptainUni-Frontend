import React, { useState, useEffect } from "react";
import { api } from "../services/api";
import AddOrEditAthleteForm from "./AddOrEditAthleteForm";

function AthleteProfile({ id, fetchAthletes }) {
  const [athlete, setAthlete] = useState({});

  const fetchAthlete = () => {
    api.athletes.getAthlete(id).then(res => {
      setAthlete(res.athlete)
    })
  }

  //Use props to set the current athlete upon component mount
  //to change state upon edit
  useEffect(() => {
    fetchAthlete()
    return () => {
      setAthlete({});
    };
  }, []);

  //Passed down to edit form and will pass params
  //back up here to state level
  const editAthlete = (data) => {
    api.athletes.editAthlete(data).then(setAthlete({ ...athlete, ...data })
    )
  };

  return (
    <>
      {/* Edit form is either showing or pencil button */}
      <AddOrEditAthleteForm
        athleteId={athlete.id}
        athleteName={athlete.full_name}
        editAthlete={editAthlete}
      />
      <div>
        <h1>{athlete.full_name}</h1>
        <img src={athlete.image} alt={athlete.full_name + "'s photo"} />
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
