import { combineReducers } from "redux";
import session from './session_errors_reducer';
import prof_review from './prof_review_errors_reducer';

export default combineReducers({
    session,
    prof_review
});