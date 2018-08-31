import React from 'react';
import {NavLink} from 'react-router-dom';

const Course = (props) => {
    const {name, description, session, trainer, duration} = props.course;
    console.log(props);
    const url = `/session/${session}`;
    return (
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td><NavLink to={url}>{session}</NavLink></td>
            <td>{trainer}</td>
            <td>{duration}</td>
        </tr>
    )
}

export default Course;

