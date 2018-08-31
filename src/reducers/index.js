import {combineReducers} from 'redux';
import courses from './courses';
import sessions from './sessions';

const reducers = combineReducers({
    courses:courses,
    sessions: sessions
})

export default reducers;