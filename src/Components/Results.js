import React from "react";
import { If, Then, Else } from "react-if";
import "../scss/form.scss";
import ReactJson from "react-json-view";
import "react-json-pretty/themes/monikai.css";
import Loading from "./Loading.js";

function Results({ people }) {
  return (
    <If condition={people.length === 0}>
      <Then>
        <section id="section"></section>
      </Then>

      <Else>
        <If condition={people}>
          <Then>
            <section id="section">
               <h2>Response</h2>
              <ReactJson
                src={people}
                name="Response"
                // theme={"grayscale:inverted"}
                iconStyle={'triangle'}
                collapsed={false}
                enableClipboard={false}
                displayDataTypes={false}
              />
            </section>
          </Then>
          <Else>
          <section id="section">
              <Loading />
            </section>
          </Else>
        </If>
      </Else>
    </If>
  );
}

export default Results;
