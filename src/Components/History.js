import React from "react";
import { If, Then, Else } from "react-if";
import "../scss/history.scss";
// import ReactJson from "react-json-view";
import {Link} from 'react-router-dom';

function History({ history ,trigger }) {
  let historyArr = [];
  if (localStorage.getItem("history")) {
    historyArr = JSON.parse(localStorage.getItem("history"));
  }
  return (
    <If condition={historyArr.length !== 0}>
      <Then>
        <div id="history">
          {historyArr.map((hist, idx) => {
            return (
              <div key={idx} >
                <p id={idx + 'method'}>{hist.method}</p>
                <p onClick={getOldQuery}>{hist.url}</p>
                <p style={{display:"none"}}>{hist.body}</p>
                <If condition={trigger}>
                <Link to={{
                  pathname:"/",
                  data:{
                    method:hist.method,
                    url:hist.url,
                    body:hist.body
                  }
                }}>Re-Run</Link>
                </If>
              </div>
            );
          })}
        </div>
          <If condition={trigger}>
               <div id="historyDetails">
                 <p id="Method"></p>
                 <p id="URL"></p>
                 <p id="Body"></p>
              </div> 
          </If>
     
      </Then>
      <Else>
        <div id="history"></div>
      </Else>
    </If>
  );
}
// function viewData(e){
//   console.log(e)
// }
function getOldQuery(e){
    let method = e.target.parentElement.children[0].innerHTML;
    let url = e.target.parentElement.children[1].innerHTML;
    let body = e.target.parentElement.children[2].innerHTML;

    document.querySelector(`#Method`).innerHTML = "Method : " + method;
    document.querySelector('#URL').innerHTML = "URL : "+url;
    document.querySelector('#Body').innerHTML = "Body : "+body;
}
export default History;
