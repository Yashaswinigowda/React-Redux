
import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers ({
  courses   // this are called short hand properties
});


export default rootReducer;
