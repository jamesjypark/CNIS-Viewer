import React, { Component } from "react";
import PatientCard from "../PatientCard/PatientCard";
import retrieveFromServer from "../../functions/retrieveFromServer";

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = { patientInfo: [] };
  }
  componentWillMount() {
    this.setState({ patientInfo: retrieveFromServer() });
  }
  render() {
    return (
      <div className="App" onClick={retrieveFromServer}>
        <div>{typeof this.state.patientInfo}</div>
        Hello
        <PatientCard />
      </div>
    );
  }
}

export default Viewer;
