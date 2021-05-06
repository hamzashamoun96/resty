import React from 'react';
import '../scss/header.scss'
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <header>
                <h1>RESTy</h1>
                    <ul>
                        <li> <NavLink exact to="/" > Home </NavLink> </li>
                        <li> <NavLink to="/history" >History</NavLink> </li>
                        <li> <NavLink to="/help" >Help</NavLink> </li>
                    </ul>
            </header>
        )
    }
}

export default Header