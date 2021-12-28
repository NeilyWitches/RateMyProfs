import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, ExtraProtectedRoute, ProfEditRoute } from '../util/route_util';
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
import Footer from './footer';
import CreateProfFormContainer from './profs/create_prof_form_container';
import EditUserContainer from './user_profile/edit_user_container';
import AccountInfoContainer from './user_profile/account_info_container';
import DeleteUserContainer from './user_profile/delete_account_container';
import SavedProfsContainer from './user_profile/saved_profs_container';
import CreateSchoolFormContainer from './schools/create_school_form_container';
import SchoolIndexContainer from './schools/school_index_container';
import ProfileInfoContainer from './user_profile/profile_info_container';
import EditProfileContainer from './user_profile/edit_profile_container';
import EditProfFormContainer from './profs/edit_prof_form_container';
import SchoolRatingIndexContainer from './school_ratings/school_rating_index_container';
import CreateSchoolRatingFormContainer from './school_ratings/create_school_rating_form_container';

const App = ({ children }) => (
    <div>
        
        <Route path='/' component={NavBarContainer} />
        <Route path='/' component={Footer} />
        <Switch>
            <Route path='/schools/new' component={CreateSchoolFormContainer} />
            <Route path='/schools/:query' component={SchoolIndexContainer} />
            <Route path='/schoolRatings/new/:schoolId' component={CreateSchoolRatingFormContainer} />
            <Route path='/schoolRatings/:schoolId' component={SchoolRatingIndexContainer} />
            <Route path='/profReviews/new/:profId' component={CreateProfReviewFormContainer} />
            <ExtraProtectedRoute path='/profReviews/edit/:userId/:profId/:profReviewId' component={EditProfReviewFormContainer} />
            <ProfEditRoute path='/profs/edit/:profId' component={EditProfFormContainer} />
            <Route path='/profs/new' component={CreateProfFormContainer} />
            <Route path='/profs/:schoolName/:query' component={ProfIndexContainer} />
            <Route path='/profs/:profId' component={ProfReviewIndexContainer} />
            <ExtraProtectedRoute path='/account/profile/edit/:userId' component={EditProfileContainer} />
            <ExtraProtectedRoute path='/account/ratings/:userId' component={UserRatingsIndexContainer} />
            <ExtraProtectedRoute path='/account/edit/:userId' component={EditUserContainer} />
            <ExtraProtectedRoute path='/account/delete/:userId' component={DeleteUserContainer} />
            <ExtraProtectedRoute path='/account/profs/:userId' component={SavedProfsContainer} />
            <ExtraProtectedRoute path='/account/profile/:userId' component={ProfileInfoContainer} />
            <ExtraProtectedRoute path='/account/:userId' component={AccountInfoContainer} />
            <AuthRoute path='/signup' component={SignupContainer} />
            <AuthRoute path='/login' component={LoginContainer} />
            <Route exact path='/' component={HomeContainer} />
            <Route path='/404' component={NotFoundPage} />
            <Redirect to='/404' />
        </Switch>
    </div>
);

export default App;