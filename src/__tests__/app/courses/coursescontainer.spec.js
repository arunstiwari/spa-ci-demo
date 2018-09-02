import React from 'react'
import configureStore from 'redux-mock-store';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CourseContainer from '../../../components/app/courses/coursecontainer';
import {initialState} from '../../../store/initialState';

Enzyme.configure({adapter: new Adapter()})


// const initialState = {};
const mockStore = configureStore();
let wrapper;
let store;

// AAA (Arrange, Act, Assert)
describe('CourseContainer', () => {
    
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<CourseContainer store={store} />)
    });

    it('should render the container', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('Should have Courses Component', () => {
        expect(wrapper.find('Courses')).toHaveLength(1);
    });

    it('Should have prop courses', () => {
        expect(wrapper.prop('courses')).toEqual(initialState.courses);
    });
});