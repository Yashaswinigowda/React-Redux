
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers ({
  courses,   // this are called short hand properties
  authors
});


export default rootReducer;
