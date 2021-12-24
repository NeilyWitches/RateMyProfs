import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';
import Signup from './signup';
import { clearErrors } from '../../actions/clear_errors';
import { requestAllProfs } from '../../actions/prof_actions';
import {requestSchools} from '../../actions/school_actions';

const mSTP = (state) => {
    return {
        signup_errors: state.errors.signup,
        profs: Object.values(state.entities.profs).map(prof => ({name: prof.first_name + " " + prof.last_name, school_id: prof.school_id})),
        schools: state.entities.schools,
        schoolList: Object.values(state.entities.schools)
    };
};

const mDTP = dispatch => ({
    createUser: formUser => dispatch(createUser(formUser)),
    clearErrors: () => dispatch(clearErrors()),
    requestAllProfs: onlyProfs => dispatch(requestAllProfs(onlyProfs)),
    requestSchools: () => dispatch(requestSchools()),
});

export default connect(mSTP, mDTP)(Signup);