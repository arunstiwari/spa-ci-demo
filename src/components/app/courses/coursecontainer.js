import { connect } from 'react-redux';
import {addNewCourse, updateCourse} from '../../../actions';
import Courses from './courses';

const  mapStateToProps = (state) => ({ courses: state.courses });

const mapDispatchToProps = (dispatch)=> {
  return {
    addNewCourse: (course) => dispatch(addNewCourse(course)),
    updateCourse: (course) => dispatch(updateCourse(course))
  }
};

const CourseContainer = connect(mapStateToProps, mapDispatchToProps)(Courses);

export default CourseContainer;