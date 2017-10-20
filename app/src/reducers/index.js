import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import NodeReducer from './node-reducer';

const reducers = {
    nodeStore: NodeReducer,
    form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;