import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProfReviewIndexContainer from './prof_reviews/prof_review_index_container';
import CreateProfReviewFormContainer from './prof_reviews/create_prof_review_form_container';
import EditProfReviewFormContainer from './prof_reviews/edit_prof_review_form_container';
import ProfReviewShowContainer from './prof_reviews/prof_review_show_container';

const App = ({ children }) => (
    <div>
        <h1>Rate My Profs</h1>
        <Switch>
            <Route exact path='/' component={ProfReviewIndexContainer} />
            <Route path='/profReviews/new' component={CreateProfReviewFormContainer} />
            <Route exact path='/profReviews/:profReviewId' component={ProfReviewShowContainer} />
            <Route path='/profReviews/:profReviewId/edit' component={EditProfReviewFormContainer} />
        </Switch>
    </div>
);

export default App;