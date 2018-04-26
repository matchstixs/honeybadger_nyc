import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/user-actions';
import * as tweetActions from '../actions/tweets-actions';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.fetchTweets = this.fetchTweets.bind(this);
    }

    componentWillMount() {
        this.props.userActions.fetchUser();
        this.fetchTweets();
    }

    fetchTweets() {
        this.props.tweetsActions.fetchTweets();
    }

    updateUserName() {
<<<<<<< HEAD
        this.props.userActions.setUserName('John')
=======
        this.props.userActions.setUserName('John');
>>>>>>> 1b71f41613e4820cf180829f4c3b9f173b9488c8
    }

    render() {
        const { user, tweets } = this.props;

<<<<<<< HEAD
        if(true) {
            return (
            <div>
                <button onClick={this.fetchTweets.bind(this)}> load tweets </button>
                <button onClick={this.updateUserName.bind(this)}> update username </button>
                </div>
            )
        }

        const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>);
=======
        const mappedTweets = tweets.map(tweet => {
            return (
                <li key={tweet.id}>
                    <span>{tweet.content}</span>
                    <br/>
                    <span>{tweet.author}</span>
                </li>
            )
        });
>>>>>>> 1b71f41613e4820cf180829f4c3b9f173b9488c8

        return (
            <div>
                <ul>{mappedTweets}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user,
        userFetched: state.user.fetched,
        tweets: state.tweets.tweets
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        tweetsActions: bindActionCreators(tweetActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
