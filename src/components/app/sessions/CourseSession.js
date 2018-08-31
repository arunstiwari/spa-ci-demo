import React from 'react';
import ListSessions from './ListSessions';
import SessionCreate from './SessionCreate';


const CourseSession = props => {
    return(
        <div className="container-fluid">
            <SessionCreate addNewSession={props.addNewSession} />
            <hr className="form-break" />
            <div className="row">
               <ListSessions sessions={props.sessions} />
            </div>
        </div>
    )
}

export default CourseSession;