import {combineReducers} from 'redux';

import horses from './horses';

const rootReducer = combineReducers({
  horses: horses,
});

export default rootReducer;
