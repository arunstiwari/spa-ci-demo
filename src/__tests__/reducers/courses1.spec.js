import {courses1} from '../../reducers/courses';
import { initialState } from '../../store/initialState';
import {ADD_NEW_COURSE,UPDATE_COURSE} from '../../constants';

const course = {
  id: 0,
  name: 'Course',
  description: 'Test Course',
  duration: 5,
  session: '',
  trainer: ''
}
describe('Courses Reducer Suites', () => {
    
    it('Should return me intialState.courses when passed non matching action type', () => {
        const actual = courses1([],{type:'XYZ'});
        expect(actual).toEqual(initialState.courses);
    });

    it('Testing the state for Action ADD_NEW_COURSE with undefined state', () => {
        const actualCourse = courses1(null,{type:ADD_NEW_COURSE, payload: course })
        expect(actualCourse).toEqual([course])
    });

});