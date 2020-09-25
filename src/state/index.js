import { combineReducers } from 'redux';
import developersReducer from './DevelopersData';

const rootReducer = combineReducers({
    developersReducer,
})
export default rootReducer
