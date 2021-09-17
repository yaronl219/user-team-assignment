import { combineReducers } from 'redux';
import unassignedUsersReducer from './unassignedUsersReducer'
import assignedTeamsReducer from './assignedTeamsReducer';
import viewElementsReducer from './viewElementsReducer';

const rootReducer = combineReducers({
    assignedTeamsReducer,
    unassignedUsersReducer,
    viewElementsReducer
})

export default rootReducer;
