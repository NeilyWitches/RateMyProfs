import {connect} from 'react-redux';
import {requestSchoolRatings} from '../../actions/school_rating_actions';
import SchoolRatingIndex from './school_rating_index';

const mSTP = (state, ownProps) => {
    return {
        school: state.entities.schools[ownProps.match.params.schoolId],
        profs: Object.values(state.entities.profs),
        profReviews: Object.values(state.entities.prof_reviews),
        schoolRatings: Object.values(state.entities.school_ratings),
    }
};

const mDTP = dispatch => ({
    requestSchoolRatings: (schoolId) => dispatch(requestSchoolRatings(schoolId)),
});

export default connect(mSTP, mDTP)(SchoolRatingIndex);