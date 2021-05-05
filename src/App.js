import React from "react";

import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import From from "./Components/Form.js";
import Results from "./Components/Results.js";
import History from "./Components/History.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      history: [],
    };
  }

  dataHandler = (result , history) => {
    this.setState({
      people: result,
      history:history,
    });
  };

  render() {
    return (
      <>
        <Header />
        <From dataHandler={this.dataHandler} />
        <Results people={this.state.people} />
        <History history={this.state.history}/>
        <Footer />
      </>
    );
  }
}

export default App;
