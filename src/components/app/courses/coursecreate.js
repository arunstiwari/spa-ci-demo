import React from 'react'

const CourseCreate = props => {
    let crseName;
    let description;
    let duration;

    const addNewCourse = () => {
        console.log(crseName.value);
        console.log(duration.value);
        console.log(description.value);
        const course = {
            name: crseName.value,
            description: description.value,
            duration: duration.value
        }
        props.addNewCourse(course)
        crseName.value='';
        duration.value='';
        description.value='';
    }
    return(
        <div className="row">
           <div className="col-4">
                <input id="coursename" className="form-control" type="text" placeholder="Course Name..." ref={e=> crseName = e} />
           </div>
            <div className="col-4">
                <input id="description" className="form-control" type="text" placeholder="Description..." ref={e => description =e} />
            </div>
            <div className="col-2">
                <input id="duration" className="form-control" type="text" placeholder="Duration..." ref={e => duration =e} />
            </div>
              <button id="addnewcourse" className="btn btn-primary" onClick={addNewCourse}>Add New Course</button>
        </div>
    )
}

export default CourseCreate;