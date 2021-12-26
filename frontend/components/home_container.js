import { connect } from 'react-redux';
import Home from './home';
import { login } from '../actions/session_actions';
import { requestSchools } from '../actions/school_actions';
import { requestAllProfs } from '../actions/prof_actions';

const mSTP = state => {
    return {
        current_user: state.session.current_user,
        schools: state.entities.schools,
        schoolList: Object.values(state.entities.schools),
        profs: Object.values(state.entities.profs).map(prof => ({name: prof.first_name + " " + prof.last_name, school_id: prof.school_id})),
    };
};

const mDTP = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    requestSchools: () => dispatch(requestSchools()),
    requestAllProfs: onlyProfs => dispatch(requestAllProfs(onlyProfs)),
});

export default connect(mSTP, mDTP)(Home);