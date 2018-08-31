import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseContainer from './components/app/courses/coursecontainer';
import NavigationBar from './components/nav/NavigationBar';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div className="container-fluid">
          <NavigationBar />

           <AppRoutes />
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
