import React from "react";
import "./PatientCard.scss";

class PatientCard extends React.Component {
  render() {
    const {
      patientId,
      name,
      village,
      contact,
      age,
      height,
      weight,
      parity,
      duration,
      medicalHistory,
      firstDate,
      preEclampsia,
      fetalSize,
      diastolic,
      systolic,
      coexistingConditions,
      secondDate,
      cmds
    } = this.props;
    const requiredFields = [
      patientId,
      name,
      village,
      contact,
      age,
      height,
      weight,
      parity,
      duration,
      medicalHistory,
      firstDate,
      preEclampsia,
      fetalSize,
      diastolic,
      systolic,
      coexistingConditions,
      secondDate,
      cmds
    ];
    const filedLabel = [
      "patientId",
      "name",
      "village",
      "contact",
      "age",
      "height",
      "weight",
      "parity",
      "duration",
      "medicalHistory",
      "firstDate",
      "preEclampsia",
      "fetalSize",
      "diastolic",
      "systolic",
      "coexistingConditions",
      "secondDate",
      "cmds"
    ];
    return (
      <div className="PatientCard">
        {requiredFields.map((field, index) => (
          <div>{`${filedLabel[index]}: ${field}`}</div>
        ))}
      </div>
    );
  }
}

export default PatientCard;
