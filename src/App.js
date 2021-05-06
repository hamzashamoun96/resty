import React from "react";

import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Main from './Components/Main.js';
// import Form from "./Components/Form.js";
// import Results from "./Components/Results.js";
// import History from "./Components/History.js";

class App extends React.Component {
  



  render() {
    return (
      <>
        <Header />
        <Main/>
        <Footer />
      </>
    );
  }
}

export default App;
