import { combineReducers } from "redux";
import prof_review from './prof_review_errors_reducer';
import login from './login_errors_reducer';
import signup from './signup_errors_reducer';
import prof from './prof_errors_reducer';
import change_email from './change_email_reducer';
import change_password from './change_password_reducer';
import school from './school_errors_reducer';
import update_profile from './update_profile_reducer';
import school_rating from './school_rating_errors_reducer';

export default combineReducers({
    login,
    signup,
    prof_review,
    prof,
    change_email,
    change_password,
    school,
    update_profile,
    school_rating,
});