import React from 'react';
import { connect } from 'react-redux';
import { requestProfReview, updateProfReview, deleteProfReview } from '../../actions/prof_review_actions';
import ProfReviewForm from './prof_review_form';

class EditProfReviewForm extends React.Component {
    render() {
        const { action, formType, profReview, history } = this.props;

        if (!profReview) return null;
        return (
            <div>
                <ProfReviewForm
                    action={action}
                    formType={formType}
                    profReview={profReview}
                    history={history} />
                <button onClick={() => this.props.deleteProfReview(this.props.profReview.id)} id='delete-prof-review'>Delete</button>
            </div>
        );
    }

    componentDidMount() {
        // debugger
        this.props.requestProfReview(this.props.match.params.profReviewId);
    };

}

const mSTP = (state, ownProps) => {
    return {
        profReview: state.entities.profReviews[ownProps.match.params.profReviewId],
        formType: 'Update Prof Review',
        prof_review_errors: state.errors.prof_review,
    };
};

const mDTP = dispatch => ({
    deleteProfReview: profReviewId => dispatch(deleteProfReview(profReviewId)),
    requestProfReview: profReviewId => dispatch(requestProfReview(profReviewId)),
    action: profReview => dispatch(updateProfReview(profReview)),
});

export default connect(mSTP, mDTP)(EditProfReviewForm);