import React from 'react';
import { connect } from 'react-redux';
import { requestProfReview, updateProfReview } from '../../actions/prof_review_actions';
import ProfReviewForm from './prof_review_form';
import { requestProf } from '../../actions/prof_actions';
import { clearErrors } from '../../actions/clear_errors';

class EditProfReviewForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { action, formType, history, prof_review_errors, prof, match, profReview } = this.props;

        if (!prof || !profReview) return null;

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
            </div>
        );
    }

    componentDidMount() {
        this.props.requestProfReview(this.props.match.params.profReviewId)
        this.props.requestProf(this.props.match.params.profId)
        this.props.clearErrors();
    };

}

const mSTP = (state, ownProps) => {
        return {
            profReview: state.entities.prof_reviews[ownProps.match.params.profReviewId],
            formType: 'Edit Your Rating of Prof ',
            prof_review_errors: state.errors.prof_review,
            prof: state.entities.profs[ownProps.match.params.profId],
        };
};

const mDTP = dispatch => ({
    requestProfReview: profReviewId => dispatch(requestProfReview(profReviewId)),
    action: profReview => dispatch(updateProfReview(profReview)),
    requestProf: profId => dispatch(requestProf(profId)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(EditProfReviewForm);