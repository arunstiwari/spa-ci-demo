import React from 'react'
import Enzyme, {shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CourseCreate from '../../../components/app/courses/coursecreate';

Enzyme.configure({adapter: new Adapter()});

describe('CourseCreate', () => {
    const addNewCourse = jest.fn();

    it('Should Render the Component', () => {
        const wrapper = shallow(<CourseCreate />);
        expect(wrapper).toHaveLength(1);
    });

    it('Should Have the properties addNewCourse', () => {
      const wrapper = shallow( <CourseCreate  addNewCourse={addNewCourse}/> );
      expect(wrapper.prop('addNewCourse')).toEqual(addNewCourse());
    });

    it('Should Have Button Component', () => {
      const wrapper = shallow( <CourseCreate  addNewCourse={addNewCourse}/> );
      expect(wrapper.find('button')).toHaveLength(1);
    });

    it('Should trigger addNewCourse callback', () => {
      const wrapper = mount( <CourseCreate  addNewCourse={addNewCourse}/> );
      wrapper.find('#coursename').getDOMNode().value='Course6';
       wrapper.find('#description').getDOMNode().value = 'Course6 Description';
        wrapper.find('#duration').getDOMNode().value = '12';
    
      wrapper.find('button').simulate('click');
      expect(addNewCourse).toBeCalled();
    });
});