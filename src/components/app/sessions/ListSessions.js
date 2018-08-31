import React from 'react';
import Session from './Session';
import {branch, renderComponent} from 'recompose';

const ListSessions = ({sessions}) => {
    console.log("Sessions: ",sessions);
    return(
        <div className="col-7 offset-2">
           <table className="table table-stripped table-bordered">
               <thead className="thead-dark">
                   <tr>
                       <th>Name</th>
                        <th>Description</th>
                        <th>Course</th>
                        <th>Speaker</th>
                        <th>Duration</th>
                   </tr>
               </thead>
               <tbody>
                   { sessions.map((session,index) => (<Session key={index} session={session} />))}
               </tbody>
           </table>
           
        </div>
    )
}

const NoComp = () => {
    return (
        <div>No Sessions</div>
    )
}

export default branch(
    (sessions) => sessions.length === 0,
    renderComponent(NoComp)
)(ListSessions);