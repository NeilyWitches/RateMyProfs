import { combineReducers } from 'redux';
import ProfReviewsReducer from './prof_reviews_reducer';
import ProfsReducer from './profs_reducer';
import UsersReducer from './users_reducer';

export default combineReducers({
    profs: ProfsReducer,
    users: UsersReducer,
});

