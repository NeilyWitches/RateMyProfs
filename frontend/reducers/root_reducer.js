import ProfReviewsReducer from './prof_reviews_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    profReviews: ProfReviewsReducer,
});

export default RootReducer;