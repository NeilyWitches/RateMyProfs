import React from 'react';
import { connect } from 'react-redux';
import { requestProfReview, updateProfReview, deleteProfReview } from '../../actions/prof_review_actions';
import ProfReviewForm from './prof_review_form';

class EditProfReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.clickDelete = this.clickDelete.bind(this);
    }

    render() {
        const { action, formType, profReview, history, prof_review_errors } = this.props;

        if (!profReview) return null;
        return (
            <div>
                <ProfReviewForm
                    action={action}
                    formType={formType}
                    profReview={profReview}
                    history={history} 
                    prof_review_errors={prof_review_errors}/>
                <button onClick={this.clickDelete} id='delete-prof-review'>Delete</button>
            </div>
        );
    }

    componentDidMount() {
        this.props.requestProfReview(this.props.match.params.profReviewId);
    };

    clickDelete() {
        this.props.deleteProfReview(this.props.profReview.id)
        .then(() => this.props.history.push(`/account/ratings/${this.props.match.params.userId}`))
    }

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