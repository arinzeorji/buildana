import React from 'react';
import styled from 'styled-components';
import Login from '../components/Login';
import Register from '../components/Register';

const AccountDiv = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
`
const Accounts = () => {
    return (
        <AccountDiv>
            <Login />
            <Register />
        </AccountDiv>
    )
}

export default Accounts;
