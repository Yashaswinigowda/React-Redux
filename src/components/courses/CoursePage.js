import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions'; // refereence to courseAction

import CourseList from './CourseList';

import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
class CoursePage extends React.Component {
  constructor(props, context)
  {
    super(props,context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

//used to print the arrays with key value pair
  // courseRow(course, index)
  //   {
  //    return <div key={index}>{course.title}</div>;
  //   }

    redirectToAddCoursePage(){
      browserHistory.push('/course');
    }

  render(){
    const {coursesFromReducer} = this.props;

    return(
        <div>
            <h1> Courses </h1>
            <input type="text"
                   value="Add course"
                   className="btn btn-primary"
                   onClick= {this.redirectToAddCoursePage}
                   />

            <CourseList courses={coursesFromReducer}/>
        </div>
    );
  }
}


CoursePage.propTypes ={
  //dispatch:PropTypes.func.isRequired,
  coursesFromReducer:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
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
