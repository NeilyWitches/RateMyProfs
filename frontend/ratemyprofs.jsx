import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.current_user) {
        preloadedState = {
            session: {
                current_user: window.current_user
            }
        };
    }
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, root);
});