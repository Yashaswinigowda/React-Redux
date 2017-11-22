import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions'; // refereence to courseAction
import CourseForm from './CourseForm';

import {bindActionCreators} from 'redux';

class ManageCoursePage extends React.Component {
  constructor(props, context)
  {
    super(props,context);

    this.state={
      course: Object.assign({}, this.props.course),
      errors: {}
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  updateCourseState(event) {
   const field = event.target.name;
   let course = this.state.course;  // inorder to avoid mutating state we do below approach
  // let course = Object.assign({}, this.props.course);
   course[field] = event.target.value;
   return this.setState({course});
  }

  saveCourse(event){
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
  }

  render(){

    return(
        <div>
            <h1> Manage Courses </h1>

            <CourseForm
            allAuthors={this.props.authors}
            onChange={this.updateCourseState}
            onSave={this.saveCourse}
            course={this.state.course}
            errors={this.state.errors}
          />

        </div>
    );
  }
}


ManageCoursePage.propTypes ={
  course:PropTypes.object.isRequired,
  authors:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
 let course = {id: '', watchHref: '', title:'', authorId: '', length:'',category:''};

/* We are customizing the props that we are getting from store
   bcoz the Dropdown in course form is accepting only key and author name*/
   const authorsFormattedForDropDown = state.authors.map (author => {
     return {
        value: author.id,
        text: author.firstName + ' ' + author.lastName
     };
   });

  return{
    course: course,  // state.courses is pointing to reducers state name that is given in index page
    authors: authorsFormattedForDropDown
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
export default connectedStateAndProps(ManageCoursePage);
*/
export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
