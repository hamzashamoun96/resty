import React from "react";
import "../scss/form.scss";

let prop;
function datat() {
  if(prop.data.data){
  document.querySelector(`#url`).value = prop.data.data.url;
  document.querySelector(`#bodyArea`).value = prop.data.data.body;
  document.querySelector(`#${prop.data.data.method}`).checked = true;

  }
}
class Form extends React.Component {
  constructor(props) {
    super(props);
    prop = this.props
  }
  componentDidMount(){
    this.setState({
      history:!this.props.history
    })
  }
  componentDidUpdate(){
    console.log("GGGG")
    datat()
  }
  result = async (e) => {
    e.preventDefault();
    let historyArr = [];
    this.props.dataHandler(false, []);

    let body = e.target.body.value;
    let url = e.target.url.value;
    let fetchMethod = e.target.method.value;
    if (fetchMethod === "GET") {
      body = null;
    } else {
      if (body) {
        body = JSON.stringify(JSON.parse(e.target.body.value));
      } else {
        body = JSON.parse("null");
      }
    }

    let options = {
      method: `${fetchMethod}`,
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: body,
    };
    let history = {
      method: fetchMethod,
      url,
      body,
    };

    try {
      const raw = await fetch(url, options);
      const data = await raw.json();
      
      if (localStorage.getItem("history")) {
        historyArr = JSON.parse(localStorage.getItem("history"));
        if(historyArr.find(e=>{
          if(e.method === history.method && e.url === history.url && e.body === history.body){
            return 1
          }
        })){
          console.log("FIND ONE")
        }else{
          historyArr.push(history);
          localStorage.setItem("history", JSON.stringify(historyArr));
        }
      }else{
        historyArr.push(history);
        localStorage.setItem("history", JSON.stringify(historyArr));
      }



      this.props.dataHandler(data, history);
    } catch (error) {
      console.log(error);
      const data = error.message;
      this.props.dataHandler(data, history);
    }
  };

  render() {
    // setTimeout(datat, 500);
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
            <input
              id="GET"
              type="radio"
              value="GET"
              name="method"
              defaultChecked
            />
            <span className="checkmark">GET</span>
          </label>

          <label className="radio">
            <input id="POST" type="radio" value="POST" name="method" />
            <span className="checkmark">POST</span>
          </label>

          <label className="radio">
            <input id="PUT" type="radio" value="PUT" name="method" />
            <span className="checkmark">PUT</span>
          </label>

          <label className="radio">
            <input id="DELETE" type="radio" value="DELETE" name="method" />
            <span className="checkmark">DELETE</span>
          </label>
          <textarea name="body" id="bodyArea" cols="100" rows="5"></textarea>
        </form>
      </div>
    );
  }
}
export default Form;
