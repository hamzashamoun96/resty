import React from "react";
import { If, Then, Else } from "react-if";
import "../scss/history.scss";

function History({ history }) {
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
              <div key={idx} onClick={getOldQuery}>
                <p id={idx + 'method'}>{hist.method}</p>
                <p>{hist.url}</p>
                <p style={{display:"none"}}>{hist.body}</p>
              </div>
            );
          })}
        </div>
      </Then>
      <Else>
        <div id="history"></div>
      </Else>
    </If>
  );
}
function getOldQuery(e){
    // console.log(e)
    let method = e.target.parentElement.children[0].innerHTML;
    let url = e.target.parentElement.children[1].innerHTML;
    let body = e.target.parentElement.children[2].innerHTML;
    document.querySelector(`#${method}`).checked = true;
    document.querySelector('#url').value = url;
    document.querySelector('#bodyArea').value = body;
}
export default History;
