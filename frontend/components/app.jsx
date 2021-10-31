import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProfReviewIndexContainer from './profreviews/prof_review_index_container';
import CreateProfReviewFormContainer from './profreviews/create_prof_review_form_container';
import EditProfReviewFormContainer from './profreviews/edit_prof_review_form_container';
import ProfReviewShowContainer from './profreviews/prof_review_show_container';

const App = ({ children }) => (
    <div>
        <h1>Rate My Prof</h1>
        {/* <Switch>
            <Route exact path='/' component={ProfReviewIndexContainer} />
            <Route path='/profReviews/new' component={CreateProfReviewFormContainer} />
            <Route exact path='/profReviews/:profReviewId' component={ProfReviewShowContainer} />
            <Route path='/profReviews/:profReviewI/edit' component={EditProfReviewFormContainer} />
        </Switch> */}
    </div>
);

export default App;