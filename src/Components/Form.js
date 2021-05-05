import React from "react";
import "../scss/form.scss";

class Form extends React.Component {
  result = async (e) => {
    e.preventDefault();
    let historyArr = [];

    this.props.dataHandler(false,[]);
    
    let body = e.target.body.value;
    let url = e.target.url.value;
    let fetchMethod = e.target.method.value;
    if (fetchMethod === "GET") {
      body = null; 
    }else{
      if(body){
        body = JSON.stringify((JSON.parse(e.target.body.value)));
      }else{
        body = (JSON.parse('null'));
      }
    }
    
    let options = {
      method:`${fetchMethod}`,
      mode:'cors',
      cache: 'no-cache', 
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer',
      body: body,
    }
    let history = {
      method:fetchMethod,
      url,
      body
    }

    if(localStorage.getItem('history')){
      historyArr = JSON.parse(localStorage.getItem('history'))
    }
    historyArr.push(history);
    localStorage.setItem('history',JSON.stringify(historyArr))



    const raw = await fetch(url,options);
    const data = await raw.json();
    
    this.props.dataHandler(data , history);
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
            <input id="GET"type="radio" value="GET" name="method" defaultChecked/>
            <span className="checkmark">GET</span>
          </label>

          <label className="radio">
            <input id="POST"type="radio" value="POST" name="method" />
            <span className="checkmark">POST</span>
          </label>

          <label className="radio">
            <input id="PUT"type="radio" value="PUT" name="method" />
            <span className="checkmark">PUT</span>
          </label>

          <label className="radio">
            <input id="DELETE" type="radio" value="DELETE" name="method" />
            <span className="checkmark">DELETE</span>
          </label>
          <textarea name="body" id="bodyArea" cols="100" rows="5" ></textarea>
        </form>
      </div>
    );
  }
}
export default Form;
