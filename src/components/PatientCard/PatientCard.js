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
      // "name",
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
      <div className="PatientCard" onClick={this.onOpen}>
        <div className="Name">{name}</div>
        {isOpen &&
          requiredFields
            .filter((field, index) => {
              return index !== 1;
            })
            .map((field, index) => (
              <div>
                {field !== "undefined" && `${filedLabel[index]}: ${field}`}
              </div>
            ))}
      </div>
    );
  }
}

export default PatientCard;
