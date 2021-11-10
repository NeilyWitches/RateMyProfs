import { connect } from 'react-redux';
import ProfIndex from './prof_index';
import { requestProfs } from '../../actions/prof_actions';

const mSTP = state => {
    return {
        profs: Object.values(state.entities.profs),
    }
};

const mDTP = dispatch => ({
    requestProfs: () => dispatch(requestProfs()),
});

export default connect(mSTP, mDTP)(ProfIndex);