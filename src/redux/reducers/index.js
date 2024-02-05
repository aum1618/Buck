import {combineReducers} from 'redux';
import appConfig from './appConfig';

const Reducers = combineReducers({
  appConfig: appConfig,
});

export default Reducers;
