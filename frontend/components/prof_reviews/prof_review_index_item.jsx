import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ProfReviewIndexItem = props => (
    <li>
        <Link to={`/profReviews/${props.profReview.id}`}>Prof Review {props.profReview.id}</Link>
        <Link to={`/profReviews/edit/${props.profReview.id}`}>Edit</Link>
        <button onClick={() => props.deleteProfReview(props.profReview.id)}></button>
    </li>
);

export default ProfReviewIndexItem;