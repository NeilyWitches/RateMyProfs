import {connect} from 'react-redux';
import {clearErrors} from '../../actions/clear_errors';
import { requestSchools } from '../../actions/school_actions';
import EditProfile from './edit_profile';
import {updateProfile} from '../../actions/session_actions';

const mSTP = state => {
    return {
        user: state.session.current_user,
        schools: state.entities.schools,
        profileErrors: state.errors.update_profile,
    }
}

const mDTP = dispatch => {
    return {
        requestSchools: () => dispatch(requestSchools()),
        updateProfile: user => dispatch(updateProfile(user)),
        clearErrors: () => dispatch(clearErrors()),
    }
}

export default connect(mSTP, mDTP)(EditProfile)