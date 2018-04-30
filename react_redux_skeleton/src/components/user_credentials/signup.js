import React, {Component} from 'react';
import CredentialsForm from './credentials_form';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/user-actions';

class Signup extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const formBody = new FormData(e.target)
    }

    render() {
    return (
        <div>
            <CredentialsForm 
                formHandler={this.formHandler.bind(this)}
            />
        </div>
        );
    };
};

const mapStatetoProps = (state) => {
    return{
        user: state.user.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        routerProps: bindActionCreators ({changePage: () => {push('/') }}, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(Signup);
