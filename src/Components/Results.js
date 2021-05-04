import React from 'react';
import "../scss/form.scss";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results({rawPeople , people}) {

    if(people.count){
        return ( 
        
                <section id="section">
        
        <JSONPretty id="json-pretty" data={people}></JSONPretty>
                </section>
              );

    }else{
        return(
            <section id="section"></section>
        )
    }

}

export default Results;