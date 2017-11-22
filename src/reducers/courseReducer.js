
import * as actionType from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses , action) {
  switch (action.type) {

    case actionType.LOAD_COURSES_SUCESS:
         return action.courses;

    case actionType.CREATE_COURSE_SUCESS:
         return [
           ...state,
           Object.assign({}, action.course)
         ];

    /* Since, state is immutable, we cannot change the approriate index in the arrays
        instead we should use filter function which is part of ES6, to get all the list of course except
        for the course being updated  */
    case actionType.UPDATE_COURSE_SUCESS:
        return [
           ...state.filter(course => course.id !== action.course.id),
             Object.assign({}, action.course)
          ];
    default:
    return state;
  }
}
