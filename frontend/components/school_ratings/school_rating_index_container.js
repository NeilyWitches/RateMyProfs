import {connect} from 'react-redux';
import {requestSchool} from '../../actions/school_actions';
import SchoolRatingIndex from './school_rating_index';
import {requestProfs} from '../../actions/prof_actions';

const mSTP = (state, ownProps) => {
    return {
        school: state.entities.schools[ownProps.match.params.schoolId],
        profs: state.entities
    }
}