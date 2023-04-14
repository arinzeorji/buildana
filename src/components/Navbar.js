import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { auth } from '../firebase/firebase.utils';

const Header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Brand = styled.div`
    height: 100%;
    width: 70px;
    padding: 25px;
`;
const Navigations = styled.ul`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const LinkDiv = styled.div`
    cursor:pointer;
`

const Nav = styled.span`
    padding : 10px 15px;
`;

const Navbar = ({ currentUser }) => {
    return (

        <Header>
            <Brand>
                <Link to='/'>
                    <Logo />
                </Link>
            </Brand>
            <Navigations>
                <Nav>
                    <Link to='/shop'>
                        PRODUCTS
                    </Link>
                </Nav>
                <Nav>
                    <Link to='/contact'>
                        CONTACT
                    </Link>
                </Nav>

                {
                    currentUser ?
                        <Nav>
                            <LinkDiv onClick={() => auth.signOut}>
                                LOGOUT
                            </LinkDiv>
                        </Nav>
                        :
                        <Nav>
                            <Link to='/accounts'>
                                LOGIN
                            </Link>
                        </Nav>
                }


            </Navigations>
        </Header>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Navbar);
