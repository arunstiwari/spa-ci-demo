import {ADD_NEW_SESSION, UPDATE_SESSION} from '../constants';
import {initialState} from '../store/initialState';

const updateSession = (sessions,payload) => {
    const mod = sessions.map((session) => {
        if(session.id === payload.id ){
            session =payload;
        }
    });

    console.log(mod);
    return mod;
}

const sessions = (state=initialState.sessions, {type, payload}) => {
    switch (type) {
        case ADD_NEW_SESSION:
            console.log("Inside Add New Session: ",payload);
            console.log("State data : ",state);
            return [...state, payload]
        case UPDATE_SESSION: 
            return  updateSession(state.sessions, payload) 
                
        default:
            return initialState.sessions;
    }
}

export default sessions;