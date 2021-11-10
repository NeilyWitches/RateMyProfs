import { connect } from 'react-redux';
import { newProf } from '../../actions/prof_actions';
import ProfForm from './prof_form';

const mSTP = (state, ownProps) => {
    return {
        prof: {
            first_name: '',
            last_name: '',
            subject: '',
        },
        formType: 'Add a Prof',
    }
};

const mDTP = dispatch => ({
    action: prof => dispatch(newProf(prof)),
});

export default connect(mSTP, mDTP)(ProfForm);