import {ADD_NEW_COURSE, UPDATE_COURSE} from '../constants';
import {initialState} from '../store/initialState';

const updateCourse = (courses,payload) => {
    const mod = courses.map((course) => {
        if(course.id === payload.id ){
            course =payload;
        }
    });

    console.log(mod);
    return mod;
}

const courses = (state=initialState.courses, {type, payload}) => {
    switch (type) {
        case ADD_NEW_COURSE:
            console.log("Inside Add New Course: ",payload);
            console.log("State data : ",state);
            return [...state, payload]
        case UPDATE_COURSE: 
            return  updateCourse(state.courses, payload)          
        default:
            return initialState.courses;
    }
}

export default courses;