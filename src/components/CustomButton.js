import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &.google-sign-in{
      background-color: #4285f4;
      color:white;
  }

  &.google-sign-in:hover{
      background-color:white;
      border:2px solid #357ae8;
      color:#357ae8;
  }
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;


function CustomButton({ children, isGoogleSignin, ...otherProps }) {
    return (
        <Button className={`${
            isGoogleSignin ? 'google-sign-in' : ''
            }`} {...otherProps}>
            {children}
        </Button>
    )
}

export default CustomButton
