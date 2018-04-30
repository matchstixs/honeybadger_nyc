import React, { Component } from 'react';
import { Route, Link } from 'react-redux-dom';
import Home from './home';
import Signup from './user_credentials/signup';
import Login from './user_credentials/login';

ReactDom.render(<Provider store ={store}>
    <Layout />
    </Provider>, document.getElementById('root'));