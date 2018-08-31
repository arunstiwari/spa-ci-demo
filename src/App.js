import React, { Component } from 'react';
import './App.css';
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
