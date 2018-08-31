import courses from '../../reducers/courses';
import {initialState} from '../../store/initialState';
import {ADD_NEW_COURSE,UPDATE_COURSE} from '../../constants';

describe('Testing for Courses Reducers', () => {
    const course = {
      id: 0,
      name: 'Course',
      description: 'Test Course',
      duration: 5,
      session: '',
      trainer: ''
    }

    const updateCourse = {
        id: 0,
          name: 'Course',
          description: 'Test1 Course',
          duration: 6,
          session: '',
          trainer: ''
    }

    it('Testing the Default State for Empty State Action', () => {
        const actualCourse = courses([],{});
        expect(actualCourse).toEqual(initialState.courses)
    });

    it('Testing the Default State for Any Undefined Action', () => {
      const actualCourse = courses(undefined, {});
      expect(actualCourse).toEqual(initialState.courses)
    });

    it('Testing the state for Action ADD_NEW_COURSE with undefined state', () => {
        const actualCourse = courses(undefined,{type:ADD_NEW_COURSE, payload: course })
        expect(actualCourse).toEqual([...initialState.courses,course])
    });

    it('Testing the state for Action ADD_NEW_COURSE', () => {       
        const actualCourse = courses([],{type:ADD_NEW_COURSE, payload: course })
        expect(actualCourse).toEqual([course])
    });
     it('Testing the state for Action ADD_NEW_COURSE when intial state is  null', () => {       
        const actualCourse = courses(null,{type:ADD_NEW_COURSE, payload: course })
        expect(actualCourse).toEqual([course])
    });

      it('Testing the state for Action UPDATE_COURSE', () => {       
        const actualCourse = courses([course],{type:UPDATE_COURSE, payload: updateCourse })
        expect(actualCourse).toEqual([updateCourse])
    });

    it('Testing the state for Action UPDATE_COURSE if course id do not match', () => {       
        const actualCourse = courses([course],{type:UPDATE_COURSE, payload: {id:5} })
        expect(actualCourse).toEqual([course])
    });
});