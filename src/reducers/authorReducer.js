
import * as actionType from '../actions/actionTypes';


export default function authorReducer(state = [] , action) {
  switch (action.type) {

    case actionType.LOAD_AUTHOR_SUCESS:
         return action.authors;

    default:
    return state;
  }
}
