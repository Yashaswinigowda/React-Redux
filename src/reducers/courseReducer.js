
import * as actionType from '../actions/actionTypes';
import * as initialState from './initialState';

export default function courseReducer(state = [] , action) {
  switch (action.type) {

    case actionType.LOAD_COURSES_SUCESS:
         return action.courses;

    default:
    return state;
  }
}
