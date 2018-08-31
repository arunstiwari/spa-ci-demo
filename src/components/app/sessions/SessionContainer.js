import { connect } from 'react-redux';
import CourseSession from './CourseSession';
import {addNewSession, updateSession} from '../../../actions';

 const mapStateToProps = (state) => (
     { sessions: state.sessions,
        courses: state.courses.courses 
    });

 const mapDispatchToProps = (dispatch)=> { 
     return {
         addNewSession: (session) => dispatch(addNewSession(session)),
         updateSession: (session) => dispatch(updateSession(session))
     }
  };

const SessionContainer = connect(mapStateToProps, mapDispatchToProps)(CourseSession);

export default SessionContainer;