import React from 'react';
import Course from './course';
import {branch, renderComponent} from 'recompose';

const ListCourses = ({courses}) => {
    console.log("Courses: ",courses);
    return(
        <div className="col-7 offset-2">
           <table className="table table-stripped table-bordered">
               <thead className="thead-dark">
                   <tr>
                       <th>Name</th>
                        <th>Description</th>
                        <th>Session</th>
                        <th>Speaker</th>
                        <th>Duration</th>
                   </tr>
               </thead>
               <tbody>
                   { courses.map((course,index) => (<Course key={index} course={course} />))}
               </tbody>
           </table>
           
        </div>
    )
}

const NoComp = () => {
    return (
        <div>No Courses</div>
    )
}

export default branch(
    (courses) => courses.length === 0,
    renderComponent(NoComp)
)(ListCourses);