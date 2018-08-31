import {addNewCourse,addNewSession, updateCourse, updateSession} from '../../actions';

describe('Testing AddNewCourse action', () => {
    const course = {name:'Course1', description:'Course1 Test', duration: '12'}
    
    it('AddNewCourse should return payload ', () => {
        const expectedPayload = {id:3,name:'Course1', description:'Course1 Test',session:'', trainer:'', duration: 12}
        const action = addNewCourse(course);
        expect(action.type).toEqual('ADD_NEW_COURSE');
        expect(action.payload).toEqual(expectedPayload);
    });
   it('UpdateCourse should return payload ', () => {
        const action = updateCourse(course);
        expect(action.type).toEqual('UPDATE_COURSE');
        expect(action.payload).toEqual(course);
    });
     
});

describe('Testing AddNewSession action', () => {
    const session = {name:'Session1', description:'Session1 Test', duration: '12'}
    it('AddNewCourse should return payload ', () => {
        const expectedPayload = {id:3,name:'Session1', description:'Session1 Test',course:'', trainer:'', duration: 12}
        const action = addNewSession(session);
        expect(action.type).toEqual('ADD_NEW_SESSION');
        expect(action.payload).toEqual(expectedPayload);
    });

     it('UpdateSession should return payload ', () => {
       const action = updateSession(session);
       expect(action.type).toEqual('UPDATE_SESSION');
       expect(action.payload).toEqual(session);
     });
});