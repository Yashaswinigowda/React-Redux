
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallInProgress from './actionStatusReducer';

const rootReducer = combineReducers ({
  courses,   // this are called short hand properties
  authors,
  ajaxCallInProgress
});


export default rootReducer;
