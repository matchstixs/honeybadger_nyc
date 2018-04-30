import React, {Component} from 'react';
import { Route, Link } from 'react-router';
import Home from './components/home';
import Signup from './components/user_credentials/signup';
import Login from './components/user_credentials/login';

const Layout = () => {
    return (
        <div>
            <header>
                <link to ='/'>Home</link>
                <link to='/signup'>Sign up</link>
                <link to='/login'>Log in</link>
            </header>

            <main>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
    )
}