import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions'; // refereence to courseAction

import CourseList from './CourseList';

import {bindActionCreators} from 'redux';

class CoursePage extends React.Component {
  constructor(props, context)
  {
    super(props,context);
  }


//used to print the arrays with key value pair
    courseRow(course, index)
    {
       return <div key={index}>{course.title}</div>;
    }

  render(){
    const {coursesFromReducer} = this.props;

    return(
        <div>
            <CourseList courses={coursesFromReducer}/>
          </div>
    );
  }
}


CoursePage.propTypes ={
  //dispatch:PropTypes.func.isRequired,
  coursesFromReducer:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired,
};


function mapStateToProps(state){
  return{
    coursesFromReducer: state.courses   // state.courses is pointing to reducers state name that is given in index page
  };
}

function mapDispatchToProps(dispatch){
    return{
       //createCourse: course => dispatch(courseActions.createCourse(course))
       actions : bindActionCreators (courseActions,dispatch)
    };
}

/* alternative way of exporting
const connectedStateAndProps= connect(mapStateToProps,mapDispatchToProps);
export default connectedStateAndProps(CoursePage);
*/
export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);
