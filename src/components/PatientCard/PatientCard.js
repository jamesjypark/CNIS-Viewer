import React from "react";
import "./PatientCard.scss";

class PatientCard extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }
  onOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
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
    const { isOpen } = this.state;
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
        {name}
        {isOpen &&
          requiredFields.map((field, index) => (
            <div>{`${filedLabel[index]}: ${field}`}</div>
          ))}
        <div onClick={this.onOpen}>{isOpen ? "Less" : "More"}</div>
      </div>
    );
  }
}

export default PatientCard;
