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
  }

  render(){

    return(
        <div>
            <h1> Manage Courses </h1>
            <CourseForm
            allAuthors={[]}
            course={this.state.course}
            errors={this.state.errors}
          />
        </div>
    );
  }
}


ManageCoursePage.propTypes ={
  //dispatch:PropTypes.func.isRequired,
};


function mapStateToProps(state){
  let course = {id: '', watchHref: '', title:'', authorId: '', length:'',category:''};
  return{
    course: course  // state.courses is pointing to reducers state name that is given in index page
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
