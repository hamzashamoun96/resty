import React from 'react';
import { Route, Switch } from 'react-router-dom';
import History from './History.js';
import Home from './Home.js';
import Help from './Help';


function Main (){
    return(

    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/history">
                <History trigger={true}/>
            </Route>
            <Route  path="/help" component={Help}/>
            <Route>
                <div>404</div>
            </Route>

        </Switch>
    </main>
    )
}

export default Main;