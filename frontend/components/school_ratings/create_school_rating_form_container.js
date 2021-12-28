import { connect } from 'react-redux';
import {requestSchool} from '../../actions/school_actions';
import { clearErrors } from '../../actions/clear_errors';
import SchoolRatingForm from './school_rating_form';
import {createSchoolRating} from '../../actions/school_rating_actions';

const mSTP = (state, ownProps) => {
    return {
        school: state.entities.schools[ownProps.match.params.schoolId],
        school_rating_errors: state.errors.school_rating,
    }
};

const mDTP = dispatch => ({
    requestSchool: schoolId => dispatch(requestSchool(schoolId)),
    clearErrors: () => dispatch(clearErrors()),
    createSchoolRating: (schoolRating) => dispatch(createSchoolRating(schoolRating)),
});

export default connect(mSTP, mDTP)(SchoolRatingForm);