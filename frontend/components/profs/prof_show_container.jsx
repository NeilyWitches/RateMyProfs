import React from 'react';
import { connect } from 'react-redux';
import { requestProf } from '../../actions/prof_actions'

class ProfShow extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestProf(this.props.match.params.profId)
    }

    render() {
        const { prof } = this.props;
        
        if (!prof) return null;
        return (
            <div>
                First Name:
                {prof.first_name}
                Last Name:
                {prof.last_name}
                Subject:
                {prof.subject}
            </div>
        )
    }
}

const mSTP = (state, ownProps) => {
    return {
        prof: state.entities.profs[ownProps.match.params.profId],
    }
};

const mDTP = dispatch => {
    return {
        requestProf: profId => dispatch(requestProf(profId)),
    }
};

export default connect(mSTP, mDTP)(ProfShow);