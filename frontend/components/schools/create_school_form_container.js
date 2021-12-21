import {connect} from 'react-redux';
import { newSchool } from '../../actions/school_actions';
import SchoolForm from './school_form';
import {clearErrors} from '../../actions/clear_errors';

const mSTP = (state) => {
    return {
        school: {
            name: '', 
            state: '',
            city: '',
            website: '',
        },
        school_errors: state.errors.school,
    }
};

const mDTP = dispatch => ({
    createSchool: school => dispatch(newSchool(school)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(SchoolForm);