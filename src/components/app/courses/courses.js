import React from 'react';
import CourseCreate from './coursecreate';
import ListCourses from './listcourses';

const Courses = props => {
    console.log(props);
    return(
        <div className="container-fluid">
         
                <CourseCreate addNewCourse={props.addNewCourse} />
            
           <hr className="form-break" />
           <div className="row">
               <ListCourses courses={props.courses} />
           </div>
        </div>
    )
}

export default Courses;