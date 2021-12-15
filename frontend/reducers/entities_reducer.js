import { combineReducers } from 'redux';
import ProfsReducer from './profs_reducer';
import ProfReviewsReducer from './prof_reviews_reducer';
import UsersReducer from './users_reducer';

export default combineReducers({
    profs: ProfsReducer,
    users: UsersReducer,
    prof_reviews: ProfReviewsReducer,
});