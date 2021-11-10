import { combineReducers } from "redux";
import prof_review from './prof_review_errors_reducer';
import login from './login_errors_reducer';
import signup from './signup_errors_reducer';
import prof from './prof_errors_reducer';

export default combineReducers({
    login,
    signup,
    prof_review,
    prof,
});