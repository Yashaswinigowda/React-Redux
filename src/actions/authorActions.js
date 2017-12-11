// this file contains the Courserelated actions
import * as actionType from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import  {beginAjaxCall} from './ajaxStatusActions';


export function loadAuthorsSucess (authors){
  return {type:actionType.LOAD_AUTHOR_SUCESS, authors};
}

/*  Using Thunk mathos for asynchorous calls
    this will always return dispatch function
    we can also use saga method to handle ASYC calls
*/
export function loadAuthors()
{
  return dispatch =>  {
    dispatch(beginAjaxCall());
     return AuthorApi.getAllAuthors().then(authors => {
       dispatch(loadAuthorsSucess(authors));
     }).catch(error => {
       throw(error);
     });
  };
}
