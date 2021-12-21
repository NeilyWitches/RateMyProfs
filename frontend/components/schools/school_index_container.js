import {connect} from 'react-redux';
import SchoolIndex from './school_index';
import { requestSchools } from '../../actions/school_actions';

const mSTP = state => {
    return {
        schools: Object.values(state.entities.schools),
    }
};

const mDTP = dispatch => ({
    requestSchools: () => dispatch(requestSchools()),
});

export default connect(mSTP, mDTP)(SchoolIndex);