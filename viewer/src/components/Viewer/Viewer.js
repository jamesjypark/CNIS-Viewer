import React, { Component } from "react";
import PatientCard from "../PatientCard/PatientCard";
// import retrieveFromServer from "../../functions/retrieveFromServer";

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = { patientInfo: [] };
  }
  componentWillMount() {
    const url = "http://192.168.0.13:3000/server.js/";
    fetch(url + "PatientInfo", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ patientInfo: res });
      });
    fetch(url + "MedicalHistory", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ medicalHistory: res });
      });
    fetch(url + "PreEclampsia", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ preEclampsia: res });
      });
    fetch(url + "CoexistingConditions", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ coexistingConditions: res });
      });
  }
  render() {
    const {
      patientInfo,
      medicalHistory,
      preEclampsia,
      coexistingConditions
    } = this.state;
    return (
      <div className="App">
        <div> CNIS Patient Viewer </div>
        <div>{`There are ${patientInfo.length} registered patients`}</div>
        {patientInfo
          .filter(patient => patient.name)
          .map(patient => {
            let patientMedicalHistory = [];
            let patientPreEclampsia = [];
            let patientCoexistingConditions = [];
            if (medicalHistory) {
              patientMedicalHistory = medicalHistory
                .filter(history => history.patientId === patient.patientId)
                .map(history => history.medicalHistory);
            }
            if (preEclampsia) {
              patientPreEclampsia = preEclampsia
                .filter(history => history.patientId === patient.patientId)
                .map(history => history.preEclampsia);
            }
            if (coexistingConditions) {
              patientCoexistingConditions = coexistingConditions
                .filter(history => history.patientId === patient.patientId)
                .map(history => history.coexistingConditions);
              console.log(patientCoexistingConditions);
            }
            return (
              <PatientCard
                {...patient}
                medicalHistory={patientMedicalHistory}
                preEclampsia={patientPreEclampsia}
                coexistingConditions={patientCoexistingConditions}
              />
            );
          })}
      </div>
    );
  }
}

export default Viewer;
