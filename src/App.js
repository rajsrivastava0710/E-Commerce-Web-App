import React from 'react';
import { Switch , Route , Redirect} from 'react-router-dom';
import './App.css';

import {connect} from 'react-redux';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignupLogin from './pages/signup-login/signup-login.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import Header from './components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component{

  //no need of contructor due to redux

  unsubscribeFromAuth =null;

  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
        
          })
         
        }else{ 
          setCurrentUser(userAuth)
        }
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={ HomePage }/>
      <Route exact path='/auth' render={
        ()=> this.props.currentUser ? 
        (<Redirect to='/'/>) : 
        (<SignupLogin/>)
        }/>
      <Route path='/shop' component = { ShopPage }/>
      <Route exact path='/checkout' component= { CheckoutPage }/>
      </Switch>
    </div>
  );
  }
}


const mapStateToProps =({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
