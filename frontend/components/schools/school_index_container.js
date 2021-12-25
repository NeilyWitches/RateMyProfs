import {connect} from 'react-redux';
import SchoolIndex from './school_index';
import { requestSchools } from '../../actions/school_actions';
import { requestSchoolRatings } from '../../actions/school_rating_actions';

const mSTP = state => {
    return {
        schools: Object.values(state.entities.schools),
        schoolRatings: Object.values(state.entities.school_ratings),
    }
};

const mDTP = dispatch => ({
    requestSchools: () => dispatch(requestSchools()),
    requestSchoolRatings: () => dispatch(requestSchoolRatings()),
});

export default connect(mSTP, mDTP)(SchoolIndex);