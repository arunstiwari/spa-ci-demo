import React from 'react';
import {NavLink} from 'react-router-dom';

const NavigationBar = props => {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
        
      <li className="nav-item">
        <NavLink to="/"><a className="nav-link">Home <span className="sr-only">(current)</span></a></NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/courses"><a className="nav-link">Courses</a></NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/sessions"><a className="nav-link">Sessions</a></NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/trainer"><a className="nav-link disabled">Trainer</a></NavLink>
      </li>
        </ul>
    </nav>
    )
}

export default NavigationBar;
