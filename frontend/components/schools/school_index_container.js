import {connect} from 'react-redux';
import SchoolIndex from './school_index';
import { requestSchoolsWithRatings } from '../../actions/school_actions';

const mSTP = state => {
    return {
        schools: Object.values(state.entities.schools),
        schoolRatings: Object.values(state.entities.school_ratings),
    }
};

const mDTP = dispatch => ({
    requestSchoolsWithRatings: (schoolQuery) => dispatch(requestSchoolsWithRatings(schoolQuery)),
});

export default connect(mSTP, mDTP)(SchoolIndex);