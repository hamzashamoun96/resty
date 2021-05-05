import React from "react";
import { If, Then, Else } from "react-if";
import "../scss/form.scss";
import JSONPretty from "react-json-pretty";
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
              <JSONPretty id="json-pretty" data={people}></JSONPretty>
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
