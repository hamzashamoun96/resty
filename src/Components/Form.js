import React from "react";
import "../scss/form.scss";

class Form extends React.Component {
  result = async (e) => {
    e.preventDefault();
    const raw = await fetch("https://swapi.dev/api/people/");
    const data = await raw.json();
    
    this.props.dataHandler(raw, data);
  };

  render() {
    return (
      <div className="container">
        <form id="form" onSubmit={this.result}>
          <label style={{ display: "block" }}>
            URL
            <input
              id="url"
              name="url"
              type="text"
              placeholder="http://api.url"
            />
            <input id="submit" type="submit" value="GO!" />
            <br />
          </label>
          <label className="radio">
            <input type="radio" value="get" name="method" />
            <span className="checkmark">GET</span>
          </label>

          <label className="radio">
            <input type="radio" value="post" name="method" />
            <span className="checkmark">POST</span>
          </label>

          <label className="radio">
            <input type="radio" value="put" name="method" />
            <span className="checkmark">PUT</span>
          </label>

          <label className="radio">
            <input type="radio" value="delete" name="method" />
            <span className="checkmark">DELETE</span>
          </label>
        </form>
      </div>
    );
  }
}
export default Form;
