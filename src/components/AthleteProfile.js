import React from "react";
import EditAthleteForm from "./EditAthleteForm";

function AthleteProfile(props) {

  return (
    <>
      {/* Edit form is either showing or pencil button */}
      <EditAthleteForm athleteName={props.name} />
      <div>
        <h1>{props.name}</h1>
        <img src={props.image} alt={props.name + "'s photo"} />
      </div>
      <div>
        <strong>Phone Number</strong> {props.phone_number}
        <strong>Address</strong> {props.address}
        <strong>Height</strong> {props.height}
        <strong>Weight</strong> {props.weight}
        <strong>Birthdate</strong> {props.birthday}
        <strong>Position:</strong> {props.positions}
      </div>
      <div>
        <strong>High School</strong> {props.high_school}
        <strong>Graduation Year</strong> {props.graduation_year}
        <strong>GPA</strong> {props.gpa}
      </div>
    </>
  );
}

export default AthleteProfile;
