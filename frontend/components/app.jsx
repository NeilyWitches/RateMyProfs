import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { withRouter } from 'react-router'

import NavBarContainer from './nav_bar/nav_bar_container';
import ProfReviewIndexContainer from './prof_reviews/prof_review_index_container';
import CreateProfReviewFormContainer from './prof_reviews/create_prof_review_form_container';
import EditProfReviewFormContainer from './prof_reviews/edit_prof_review_form_container';
import ProfReviewShowContainer from './prof_reviews/prof_review_show_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NotFoundPage from './not_found_page';

const App = ({ children }) => (
    <div>
        <Route path='/' component={NavBarContainer} />
        <Switch>
            
            <ProtectedRoute path='/profReviews/:profReviewId/edit' component={EditProfReviewFormContainer} />
            <Route path='/profReviews/new' component={CreateProfReviewFormContainer} />
            <Route path='/profReviews/:profReviewId' component={ProfReviewShowContainer} />
            <AuthRoute path='/signup' component={SignupContainer} />
            <AuthRoute path='/login' component={LoginContainer} />
            <Route exact path='/' component={ProfReviewIndexContainer} />
            <Route path='/404' component={NotFoundPage} />
            <Redirect to='/404' />
        </Switch>
    </div>
);

export default App;