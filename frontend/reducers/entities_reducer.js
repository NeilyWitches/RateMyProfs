import { combineReducers } from 'redux';
import ProfReviewsReducer from './prof_reviews_reducer';
import ProfsReducer from './profs_reducer';

export default combineReducers({
    profReviews: ProfReviewsReducer,
    profs: ProfsReducer,
});

