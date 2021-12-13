import { connect } from 'react-redux';
import { newProf } from '../../actions/prof_actions';
import ProfForm from './prof_form';
import { clearErrors } from '../../actions/clear_errors';

const mSTP = (state, ownProps) => {
    return {
        prof: {
            first_name: '',
            last_name: '',
            subject: '',
        },
        formType: 'Add a Prof',
        prof_errors: state.errors.prof,
    }
};

const mDTP = dispatch => ({
    action: prof => dispatch(newProf(prof)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(ProfForm);