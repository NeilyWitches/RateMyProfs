import {connect} from 'react-redux';
import ProfileInfo from './profile_info';
import {requestSchool} from '../../actions/school_actions';

const mSTP = (state) => {
    return {
        user: state.session.current_user,
        school: state.entities.schools
    }
};

const mDTP = dispatch => ({
    requestSchool: schoolId => dispatch(requestSchool(schoolId))
})

export default connect(mSTP, mDTP)(ProfileInfo);