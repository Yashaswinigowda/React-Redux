
import * as actionType from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state =  initialState.authors , action) {
  switch (action.type) {

    case actionType.LOAD_AUTHOR_SUCESS:
         return action.authors;

    default:
    return state;
  }
}
