import React from 'react';
import { Field, reduxForm } from 'redux-form'

const CredentialsFrom = (props) => {
    const { handleSubmit, formHandler } = props

    return (
        <form onSubmit={handlesubmi(formHandler)}>
            <Field name='email' component='input' placeholder='email' type='email' />
            <Field name='password' component='input' placeholder='password' type='password' />
            <button type='submit'>Submit</button>
        </form>
        )
};

export default reduxForm ({
    form: 'userCredentials'
})(CredentialsFrom)