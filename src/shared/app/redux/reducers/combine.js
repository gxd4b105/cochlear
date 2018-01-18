import { combineReducers } from 'redux';
import userReducer from './reducer';

const reducers = combineReducers({
    user: userReducer
});

export default reducers;
