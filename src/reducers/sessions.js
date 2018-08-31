import {ADD_NEW_SESSION, UPDATE_SESSION} from '../constants';
import {initialState} from '../store/initialState';

const updateSession = (sessions,payload) => {
    const mod = sessions.map((session) => {
        if(session.id === payload.id ){
            session =payload;
        }
        return session;
    });

    console.log(mod);
    return mod;
}

const sessions = (state=initialState.sessions, {type, payload}) => {
    
    switch (type) {
        case ADD_NEW_SESSION:           
            return state===null? [payload]:[...state, payload]
        case UPDATE_SESSION: 
            return (state ===null|| state.length ===0)?{}:updateSession(state, payload) 
                
        default:
            return initialState.sessions;
    }
}

export default sessions;