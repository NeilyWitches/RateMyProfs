import { combineReducers } from 'redux';
import ProfReviewsReducer from './prof_reviews_reducer';

export default combineReducers({
    profReviews: ProfReviewsReducer,
});

