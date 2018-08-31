import {ADD_NEW_COURSE, UPDATE_COURSE, ADD_NEW_SESSION, UPDATE_SESSION} from '../constants';

let id = 2;
let sessionId =2;

export const getCourseId = () => ++id;

export const getSessionId = () => ++sessionId;

export const addNewCourse = (course)=> ({
    type: ADD_NEW_COURSE,
    payload: {
        id: getCourseId(),
        name: course.name,
        description: course.description,
        session: '',
        trainer: '',
        duration: parseInt(course.duration)
    }
})

export const updateCourse = (course) => ({
  type: UPDATE_COURSE,
  payload: {
    ...course
  }
})

export const addNewSession = (session) => ({
  type: ADD_NEW_SESSION,
  payload: {
    id: getSessionId(),
    name: session.name,
    description: session.description,
    course: '',
    trainer: '',
    duration: parseInt(session.duration)
  }
})

export const updateSession = (session) => ({
  type: UPDATE_SESSION,
  payload: {
    ...session
  }
})