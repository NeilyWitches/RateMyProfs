import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, ExtraProtectedRoute } from '../util/route_util';
import { withRouter } from 'react-router';
import NavBarContainer from './nav_bar/nav_bar_container';
import CreateProfReviewFormContainer from './prof_reviews/create_prof_review_form_container';
import EditProfReviewFormContainer from './prof_reviews/edit_prof_review_form_container';
import ProfReviewIndexContainer from './prof_reviews/prof_review_index_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NotFoundPage from './not_found_page';
import HomeContainer from './home_container';
import ProfIndexContainer from './profs/prof_index_container';
import UserRatingsIndexContainer from './user_profile/user_ratings_index_container';

const App = ({ children }) => (
    <div>
        
        <Route path='/' component={NavBarContainer} />
        <Switch>
            <Route path='/profReviews/new/:profId' component={CreateProfReviewFormContainer} />
            <ProtectedRoute path='/profReviews/edit/:profReviewId' component={EditProfReviewFormContainer} />
            <Route path='/profs/:profId' component={ProfReviewIndexContainer} />
            <Route path='/profs/' component={ProfIndexContainer} />
            <ExtraProtectedRoute path='/account/ratings/:userId' component={UserRatingsIndexContainer} />
            <AuthRoute path='/signup' component={SignupContainer} />
            <AuthRoute path='/login' component={LoginContainer} />
            <Route exact path='/' component={HomeContainer} />
            <Route path='/404' component={NotFoundPage} />
            <Redirect to='/404' />
        </Switch>
    </div>
);

export default App;