import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

class App extends Component {
  makeDate = () => {};
  render() {
    return (
      <div className="container">
        <Header title={"Administrador de pacientes de veterinaria"} />
        <div className="row">
          <div className="col-md-6">
            <Form makeDate={this.makeDate} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
