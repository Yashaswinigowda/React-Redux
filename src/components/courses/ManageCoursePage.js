import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions'; // refereence to courseAction


import {bindActionCreators} from 'redux';

class ManageCoursePage extends React.Component {
  constructor(props, context)
  {
    super(props,context);
  }

  render(){

    return(
        <div>
            <h1> Manage Courses </h1>
        </div>
    );
  }
}
// let = sdikd

ManageCoursePage.propTypes ={
  //dispatch:PropTypes.func.isRequired,
};


function mapStateToProps(state){
  return{
    state: state  // state.courses is pointing to reducers state name that is given in index page
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
