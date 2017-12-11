import * as actionType from '../actions/actionTypes';
import initialState from './initialState';


function actionTypeEndsInSucess(type){
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer( state= initialState.ajaxCallsInProgress , action) {
     if(action.type == actionType.BEGIN_AJAX_CALL)
     {
       return state+1;
     }
     else if (actionTypeEndsInSucess(action.type)){
       return state - 1;
     }

    return state;
}
