import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    loggedIn: Boolean(state.session.current_user),
    current_user: state.session.current_user,
});

const Auth = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to='/' /> : <Component {...props} />
        )}
        />
);

const Protected = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to='/signup' />
        )}
        />
);

const ExtraProtected = ({ component: Component, path, current_user, loggedIn }) => {
    return <Route
            path={path}
            render={props => {
            if (current_user) {
                return props.match.params.userId == current_user.id ? <Component {...props} /> : <Redirect to='/' />
            } else if (!loggedIn) {
                return <Redirect to='/signup' />
            }
            
        }}
    />
};

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP, undefined)(Protected));
export const ExtraProtectedRoute = withRouter(connect(mSTP, undefined)(ExtraProtected));