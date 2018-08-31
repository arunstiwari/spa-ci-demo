import React from 'react'

const Session = (props) => {
    const {name, description, course, trainer, duration} = props.session;
    console.log(props);
    return (
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>{course}</td>
            <td>{trainer}</td>
            <td>{duration}</td>
        </tr>
    )
}

export default Session;