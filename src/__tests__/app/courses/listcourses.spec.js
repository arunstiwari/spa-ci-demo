import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListCourses from '../../../components/app/courses/listcourses';
import {initialState} from '../../../store/initialState';

Enzyme.configure({adapter: new Adapter()});

describe('ListCourses', () => {
    
    it('Should Render the ListCourses component', () => {
        const wrapper = shallow(<ListCourses />);
        expect(wrapper).toHaveLength(1);
    });

    it('Should have properties Courses', () => {
        const wrapper = shallow( <ListCourses courses={initialState.courses} /> );
        expect(wrapper.prop('courses').length).toEqual(3);
        expect(wrapper.prop('courses')).toEqual(initialState.courses);
    });
});