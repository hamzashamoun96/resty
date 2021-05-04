import React from "react";

import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import From from "./Components/Form.js";
import Results from "./Components/Results.js";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawPeople: [],
      people: [],
    };
  }

  dataHandler = (raw, result) => {
    this.setState({
      rawPeople: raw,
      people: result,
    });
  };

  render() {
    return (
      <>
        <Header />
        <From  dataHandler={this.dataHandler} />
        <Results rawPeople={this.state.rawPeople} people={this.state.people} />
        <Footer />
      </>
    );
  }
}

export default App;
