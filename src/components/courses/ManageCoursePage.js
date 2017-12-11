import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions'; // refereence to courseAction
import CourseForm from './CourseForm';
import toastr from 'toastr';
import {bindActionCreators} from 'redux';

class ManageCoursePage extends React.Component {
  constructor(props, context)
  {
    super(props,context);

    this.state={
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
    this.redirect = this.redirect.bind(this);
  }

/*To re-render coursev data back on the screen when page is been refreshed
  this is used to update the local state when the props change */
componentWillReceiveProps(nextProps){
  //debugger;
  if(this.props.course.id != nextProps.course.id){
    this.setState({course: Object.assign({}, nextProps.course)});
  }
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
    this.setState({saving:true});  // to convert save button to saving when it is been saving
    this.props.actions.saveCourse(this.state.course)
    .then(() => this.redirect());
    // this.context.router.push('/courses');   // once the course is saved this will redirect to courses page back

  }

  /*This function won't be calle duntill the savecourse function is been resolved
    use promise to wait for thunks */
  redirect(){
       this.setState({saving:false});  // to convert saving button to save when saving course is done
       toastr.success('Course Saved');
       this.context.router.push('/courses');   // once the course is saved this will redirect to courses page back
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
            saving={this.state.saving}
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

// pull in the react router context so router is avalible on this.context.router

ManageCoursePage.contextTypes = {
  router :PropTypes.object
};


/*Getting allcourses and also the course-id that need to be filtered */
function getCourseById(courses, id){
    //debugger;
    const course = courses.filter(course => course.id == id);

    if(course) { return course[0];}   // the filter always return array. And in this case it will always be only one couse with same id.. so returing course[0]

   return null;
  }

function mapStateToProps(state, ownProps){

 const courseId = ownProps.params.id;   // From the path router '/course/:id' - it gives the course-id in the url
 let course = {id: '', watchHref: '', title:'', authorId: '', length:'',category:''};   // this parameter we use it for new course creation

  if (courseId && state.courses.length > 0){
    course = getCourseById(state.courses, courseId);
  }

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
