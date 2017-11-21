
import * as actionType from '../actions/actionTypes';
import * as initialState from './initialState';

export default function courseReducer(state = [] , action) {
  switch (action.type) {

    case actionType.LOAD_COURSES_SUCESS:
         return action.courses;

    case actionType.CREATE_COURSE_SUCESS:
         return [
           ...state,
           Object.assign({}, action.course)
         ];

    case actionType.UPDATE_COURSE_SUCESS:
        return [
           ...state.filter(course => course.id !== action.course.id),
              Object.assign({}, action.course)
          ];
    default:
    return state;
  }
}
