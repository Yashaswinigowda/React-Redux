// this file contains the Courserelated actions
import * as actionType from './actionTypes';
import courseApi from '../api/mockCourseApi';
import  {beginAjaxCall} from './ajaxStatusActions';

export function loadCoursesSucess (courses){
  return {type:actionType.LOAD_COURSES_SUCESS, courses};
}

/*  Using Thunk mathos for asynchorous calls
    this will always return dispatch function
    we can also use saga method to handle ASYC calls
*/

export function updateCourseSucess(course)
{
   return {type:actionType.UPDATE_COURSE_SUCESS, course};
}

export function createCourseSucess(course)
{
   return {type:actionType.CREATE_COURSE_SUCESS, course};
}



export function loadCourses()
{
  return function (dispatch) {
     dispatch(beginAjaxCall());
     return courseApi.getAllCourses().then(courses => {
       dispatch(loadCoursesSucess(courses));
     }).catch(error => {
       throw(error);
     });
  };
}


/*This action is called once the Save button is clicked to save course
  In this we are writing a logic to check whether the given course already has an ID
  if it has ID it update the existence once
  else create the new one
 */

export function saveCourse(course)
{
  return function (dispatch, getState) {
     dispatch(beginAjaxCall());
     return courseApi.saveCourse(course).then(savedCourses => {
       course.id ? dispatch(updateCourseSucess(savedCourses)) :
                   dispatch(createCourseSucess(savedCourses));
     }).catch(error => {
       throw(error);
     });
  };
}
