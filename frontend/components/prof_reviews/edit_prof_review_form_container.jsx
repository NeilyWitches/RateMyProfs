import React from 'react';
import { connect } from 'react-redux';
import { updateProfReview, deleteProfReview } from '../../actions/prof_review_actions';
import ProfReviewForm from './prof_review_form';
import { requestUser } from '../../actions/user_actions';
import { requestProf } from '../../actions/prof_actions';

class EditProfReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.clickDelete = this.clickDelete.bind(this);
    }

    render() {
        const { action, formType, history, prof_review_errors, user, prof, match } = this.props;

        if (!user) return null;
        if (!prof) return null;
        const profReview = user.prof_reviews[this.props.match.params.profReviewId];
        return (
            <div>
                <ProfReviewForm
                    match={match}
                    action={action}
                    formType={formType}
                    profReview={profReview}
                    history={history} 
                    prof_review_errors={prof_review_errors}
                    prof={prof}/>
                <button onClick={this.clickDelete} id='delete-prof-review'>Delete</button>
            </div>
        );
    }

    componentDidMount() {

        this.props.requestUser(this.props.match.params.userId);
        this.props.requestProf(this.props.match.params.profId)
    };

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.requestUser(this.props.match.params.userId)
        }
    }

    clickDelete() {
        this.props.deleteProfReview(this.props.match.params.profReviewId)
        .then(() => this.props.history.push(`/account/ratings/${this.props.match.params.userId}`))
    }

}

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        formType: 'Edit Your Rating of Prof ',
        prof_review_errors: state.errors.prof_review,
        prof: state.entities.profs[ownProps.match.params.profId],
    };
};

const mDTP = dispatch => ({
    deleteProfReview: profReviewId => dispatch(deleteProfReview(profReviewId)),
    requestUser: userId => dispatch(requestUser(userId)),
    action: profReview => dispatch(updateProfReview(profReview)),
    requestProf: profId => dispatch(requestProf(profId)),
});

export default connect(mSTP, mDTP)(EditProfReviewForm);