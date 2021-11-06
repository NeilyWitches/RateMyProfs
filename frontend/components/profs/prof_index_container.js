import { connect } from 'react-redux';
import ProfIndex from './prof_index';
import { requestProfs } from '../../actions/prof_actions';
import { selectProfs } from '../../reducers/selectors';

const mSTP = state => {
    return {
        profs: selectProfs(state),
    }
};

const mDTP = dispatch => ({
    requestProfs: () => dispatch(requestProfs()),
});

export default connect(mSTP, mDTP)(ProfIndex);