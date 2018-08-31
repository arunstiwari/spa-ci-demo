import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import App from '../App';
import CourseContainer from '../components/app/courses/coursecontainer';
import HomeLayout from '../components/app/home/home';
import SessionContainer from '../components/app/sessions/SessionContainer';


const AppRoutes = (props) => {
    return(
        <Switch>
            <Route path='/' exact component ={HomeLayout} />
            <Route path='/courses' component= {CourseContainer} />
            <Route path='/sessions' component= {SessionContainer} />
             
            <Redirect to='/' />
        </Switch>
    )
}

export default AppRoutes;