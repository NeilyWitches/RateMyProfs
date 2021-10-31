import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContenetLoaded', () => {
    console.log('inside entry');
    const root = document.getElementById('root');
    const store = configureStore();
    // ReactDOM.render(<Root store={store}/>, root);
    ReactDOM.render('hello world', root);
});