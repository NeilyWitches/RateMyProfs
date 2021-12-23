import { connect } from 'react-redux';
import { newProf } from '../../actions/prof_actions';
import ProfForm from './prof_form';
import { clearErrors } from '../../actions/clear_errors';
import { requestSchools } from '../../actions/school_actions';

const mSTP = (state) => {
    return {
        prof: {
            first_name: '',
            last_name: '',
            subject: '',
            school_name: '',
        },
        prof_errors: state.errors.prof,
        schools: Object.values(state.entities.schools),
    }
};

const mDTP = dispatch => ({
    requestSchools: () => dispatch(requestSchools()),
    action: prof => dispatch(newProf(prof)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(ProfForm);