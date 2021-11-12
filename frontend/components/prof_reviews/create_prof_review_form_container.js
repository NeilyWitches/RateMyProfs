import { connect } from 'react-redux';
import { createProfReview } from '../../actions/prof_review_actions';
import ProfReviewForm from './prof_review_form';
import { requestProf } from '../../actions/prof_actions';
import React from 'react';

class CreateProfReviewForm extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { action, formType, history, prof_review_errors, prof } = this.props;
        const profReview = this.props.profReview;

        if (!prof) return null;

        return (
            <div>
                <ProfReviewForm
                    action={action}
                    formType={formType}
                    profReview={profReview}
                    history={history}
                    prof_review_errors={prof_review_errors}
                    prof={prof} />
            </div>
        );
    }

    componentDidMount() {
        this.props.requestProf(this.props.match.params.profId)
    }
}

const mSTP = (state, ownProps) => {
    if (state.session.current_user) {
        return {
            profReview: {
                body: '',
                klass: '',
                grade: 'Select',
                quality: 5,
                difficulty: 5,
                take_again: true,
                for_credit: true,
                txt_book: true,
                attendance: null,
                tag1: null,
                tag2: null,
                tag3: null,
                prof_id: ownProps.match.params.profId,
                author_id: state.session.current_user.id,
            },
            formType: "It's your turn to grade Prof ",
            prof_review_errors: state.errors.prof_review,
            prof: state.entities.profs[ownProps.match.params.profId],
        }
    } else {
        return {
            profReview: {
                body: '',
                klass: '',
                grade: null,
                quality: 5,
                difficulty: 5,
                take_again: true,
                for_credit: true,
                txt_book: true,
                attendance: null,
                tag1: null,
                tag2: null,
                tag3: null,
                prof_id: ownProps.match.params.profId,
            },
            formType: "It's your turn to grade Prof ",
            prof_review_errors: state.errors.prof_review,
            prof: state.entities.profs[ownProps.match.params.profId],
        }
    }
};

const mDTP = dispatch => ({
    action: profReview => dispatch(createProfReview(profReview)),
    requestProf: profId => dispatch(requestProf(profId)),
});

export default connect(mSTP, mDTP)(CreateProfReviewForm);