import React, { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./containers/Main/Main";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
