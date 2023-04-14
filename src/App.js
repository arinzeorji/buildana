import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import './App.css';
import Homepage from './pages/HomePage';
import Shop from './pages/Shop';
import Accounts from './pages/Accounts';
import { connect } from 'react-redux';
import { setCurentUser } from './redux/user/user-reducer';
import Navbar from './components/Navbar';
import { auth, createdUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

  unSubcribeFromAuth = null;

  componentDidMount() {

    const { setCurentUser } = this.props;

    this.unSubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createdUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        } 
              
      setCurentUser(userAuth);
      })
  }

  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }

  render() {

    return (
      <div>

        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='/shop' element={<Shop />} />
            <Route exact path='/accounts'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                    <Accounts />
                  )} />
          </Routes>
        </Router>
      </div >
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProp = dispatch => ({
  setCurentUser: user => dispatch(setCurentUser(user))
})
export default connect(null, mapDispatchToProp)(App);
