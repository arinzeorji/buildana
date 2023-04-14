import React, { Component } from 'react'
import Forms from './Forms';
import styled from 'styled-components';
import CustomButton from './CustomButton';
import { signInWithGoogle, auth } from '../firebase/firebase.utils';

const LoginFormDiv = styled.div`
    width: 380px;
    margin: 10px 10px;
    display: flex;
    flex-direction:column;
`;

const ButtonDiv = styled.div`
    display:flex;
    justify-content:space-between;
    
`
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    render() {
        return (
            <LoginFormDiv>
                <h2>LOGIN to your account here</h2>
                <p>login using email and password</p>
                <form onSubmit={this.handleSubmit}>

                    <Forms
                        value={this.state.email}
                        handleChange={this.handleChange}
                        type="email"
                        name="email"
                        label="Email"
                        required />


                    <Forms
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <ButtonDiv>

                        <CustomButton type="submit"> Login  </CustomButton>
                        <CustomButton isGoogleSignin
                            onClick={signInWithGoogle}>
                            {' '}
                            SignIn with Google {' '}
                        </CustomButton>

                    </ButtonDiv>
                </form>
            </LoginFormDiv>
        )
    }
}

export default Login;
