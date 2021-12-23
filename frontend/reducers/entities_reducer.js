import { combineReducers } from 'redux';
import LikesReducer from './likes_reducer';
import ProfsReducer from './profs_reducer';
import ProfReviewsReducer from './prof_reviews_reducer';
import ProfSavesReducer from './prof_saves_reducer';
import SchoolsReducer from './schools_reducer';

export default combineReducers({
    schools: SchoolsReducer,
    profs: ProfsReducer,
    prof_reviews: ProfReviewsReducer,
    likes: LikesReducer,
    prof_saves: ProfSavesReducer,
});