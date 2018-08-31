import {ADD_NEW_COURSE, UPDATE_COURSE} from '../constants';
import {initialState} from '../store/initialState';

const updateCourse = (courses,payload) => {
    const mod = courses.map((course) => {
        if(course.id === payload.id ){
            course =payload;
        }
        return course;
    });
    return mod;
}

const courses = (state=initialState.courses, {type, payload}) => {
    
    switch (type) {
        case ADD_NEW_COURSE:
            return state===null?[payload]: [...state, payload]
        case UPDATE_COURSE: 
            return  updateCourse(state, payload)          
        default:
            return initialState.courses;
    }
}

export default courses;