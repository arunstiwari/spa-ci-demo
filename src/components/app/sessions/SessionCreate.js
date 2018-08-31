import React from 'react'

const SessionCreate = props => {
    let sessionName;
    let description;
    let duration;
    let courses = [{id:2000,name: 'Select Courses...'}];
    console.log(props.courses);
    // courses = courses.concat(props.courses)

    const addNewSession = () => {
        console.log(sessionName.value);
        console.log(duration.value);
        console.log(description.value);
        const course = {
            name: sessionName.value,
            description: description.value,
            duration: duration.value
        }
        props.addNewSession(course)
        sessionName.value='';
        duration.value='';
        description.value='';
    }
    return(
        <div className="row">
           <div className="col-3">
                <input className="form-control" type="text" placeholder="Session Name..." ref={e=> sessionName = e} />
           </div>
            <div className="col-3">
                <input className="form-control" type="text" placeholder="Description..." ref={e => description =e} />
            </div>
            <div className="col-3">
                <select class="form-control" id="exampleFormControlSelect1" ref={e => course=e}>
                    {courses.map(course => <option key={course.id} value={course.id}>{course.name}</option>)}
                </select>
            </div>
            <div className="col-2">
                <input className="form-control" type="text" placeholder="Duration..." ref={e => duration =e} />
            </div>
              <button className="btn btn-primary" onClick={addNewSession}>Add New Session</button>
        </div>
    )
}

export default SessionCreate;