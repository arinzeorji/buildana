import React, { Component } from 'react'
import CustomButton from './CustomButton';
import { auth, createdUserProfileDocument } from '../firebase/firebase.utils';
import styled from 'styled-components';
import FormInput from './Forms';

const SignUp = styled.div`
display: flex;
flex-direction: column;
width: 380px;

`
const h2 = styled.h2`
    margin: 10px 0;
`
export class Register extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''

        }
    }

    handleSubmit = async event => {
        event.preventDafault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords dont match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createdUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUp>
                <h2>I do not have an Account</h2>
                <span> SignUp with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>

            </SignUp>
        )
    }
}

export default Register
