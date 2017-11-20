// this file contains the Courserelated actions
import * as actionType from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSucess (courses){
  return {type:actionType.LOAD_COURSES_SUCESS, courses};
}

/*  Using Thunk mathos for asynchorous calls
    this will always return dispatch function
    we can also use saga method to handle ASYC calls
*/
export function loadCourses()
{
  return function (dispatch) {
     return courseApi.getAllCourses().then(courses => {
       dispatch(loadCoursesSucess(courses));
     }).catch(error => {
       throw(error);
     });
  };
}
