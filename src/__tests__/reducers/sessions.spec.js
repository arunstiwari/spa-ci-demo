import sessions from '../../reducers/sessions';
import { initialState } from '../../store/initialState';
import { ADD_NEW_SESSION, UPDATE_SESSION } from '../../constants';

describe('Test Specific to Sessions Reducers For default action type', () => {
    
    it('Session Reducer should return default sessions object', () => {
        const actual = sessions([],{});
        expect(actual).toEqual(initialState.sessions);
    });

    it('Session Reducer should return default session if initial state is undefined', () => {
        const actual = sessions(undefined, {});
        expect(actual).toEqual(initialState.sessions);
    });

    it('Session Reducer should return default session when passed null value', () => {
        const actual = sessions(null, {});
        expect(actual).toEqual(initialState.sessions);
    });
});

describe('Session Reducer For Action Type ADD_NEW_SESSION', () => {
    const newSession = {
        type: ADD_NEW_SESSION,
        payload:{id:3, name:'Session', description: 'Session Test'}}
    
    it('Session Reducer should return one session object for action ADD_NEW_SESSION', () => {
      const actual = sessions([], newSession);
      expect(actual).toEqual([newSession.payload]);
    });
    it('Session Reducer should return four sessions object for action ADD_NEW_SESSION', () => {
      const actual = sessions(undefined, newSession);
      expect(actual).toEqual([...initialState.sessions, newSession.payload]);
    });

    it('Session Reducer should return one session object for action ADD_NEW_SESSION', () => {
      const actual = sessions(null, newSession);
      expect(actual).toEqual([newSession.payload]);
    });
});

describe('Session Reducer For Action Type UPDATE_SESSION', () => {
  const session = {
    type: UPDATE_SESSION,
    payload: {
      id: 2,
      name: 'Session',
      description: 'Session Test'
    }
  }

  const modSession = {
    type: UPDATE_SESSION,
    payload: {
      id: 2,
      name: 'Session On React',
      description: 'Session Test'
    }
  }

  it('Session Reducer should return empty session object for action UPDATE_SESSION', () => {
    const actual = sessions([], session);
    expect(actual).toEqual({});
  });

  it('Session Reducer should return four sessions object for action UPDATE_SESSION', () => {
    const actual = sessions([session.payload], modSession);
    expect(actual).toEqual([modSession.payload]);
  });

  it('Testing the state for Action UPDATE_SESSION if Session id do not match', () => {       
        const actual = sessions([session],{type:UPDATE_SESSION, payload: {id:5} })
        expect(actual).toEqual([session])
    });

});