import {connect } from 'react-redux';
import AccountInfo from './account_info';

const mSTP = (state) => {
    return {
        user: state.session.current_user,
    }
};

export default connect(mSTP)(AccountInfo);