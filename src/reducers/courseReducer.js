
import * as actionType from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {

    case actionType.LOAD_COURSES_SUCESS:
         return action.courses;

    default:
    return state;
  }
}
