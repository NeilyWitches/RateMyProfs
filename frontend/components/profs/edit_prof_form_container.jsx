import { connect } from 'react-redux';
import { editProf, requestProf } from '../../actions/prof_actions';
import ProfForm from './prof_form';
import { clearErrors } from '../../actions/clear_errors';
import { requestSchools } from '../../actions/school_actions';

const mSTP = (state, ownProps) => {
    // debugger

    return {
        prof: {
            id: ownProps.match.params.profId,
            first_name: state.entities.profs[ownProps.match.params.profId]?.first_name,
            last_name: state.entities.profs[ownProps.match.params.profId]?.last_name,
            subject: state.entities.profs[ownProps.match.params.profId]?.subject,
            school_name: state.entities.schools[state.entities.profs[ownProps.match.params.profId]?.school_id]?.name,
        },
        prof_errors: state.errors.prof,
        schools: Object.values(state.entities.schools),
        formType: "Edit Your Prof Info",
    }
};

const mDTP = dispatch => ({
    requestProf: profId => dispatch(requestProf(profId)),
    requestSchools: () => dispatch(requestSchools()),
    action: prof => dispatch(editProf(prof)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(ProfForm);