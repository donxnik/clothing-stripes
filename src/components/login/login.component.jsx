import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

import './login.style.scss';

class SignIn extends Component {

    constructor() {
        super()


        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();


        this.setState({
            email: '',
            passowrd: ''
        })
    }

    handleChange = event => {
        const { value, name } = event.taget;


        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="email" required />

                    <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label="password" required />

                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;