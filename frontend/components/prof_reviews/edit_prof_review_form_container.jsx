// import React from 'react';
// import { connect } from 'react-redux';
// import { requestProfReview, updateProfReview } from '../../actions/prof_review_actions';
// import ProfReviewForm from './prof_review_form';

// class EditProfReviewForm extends React.Component {
//     render() {
//         const { action, formType, profReview, history } = this.props;

//         if (!profReview) return null;
//         return (
//             <ProfReviewForm
//                 action={action}
//                 formType={formType}
//                 profReview={profReview}
//                 history={history} />
//         );
//     }

//     componentDidMount() {
//         this.props.requestProfReview(this.props.profReview.id);
//     };

// }

// const mSTP = (state, ownProps) => {
//     return {
//     profReview: state.entities.profReviews[ownProps.match.params.profReviewId],
//     formType: 'Update Prof Review'};
// };

// const mDTP = dispatch => ({
//     requestProfReview: profReviewId => dispatch(requestProfReview(profReviewId)),
//     action: profReview => dispatch(updateProfReview(profReview)),
// });

// export default connect(mSTP, mDTP)(EditProfReviewForm);