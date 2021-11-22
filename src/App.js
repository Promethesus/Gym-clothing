import './App.css';
import {connect} from 'react-redux';
import HomePage from './Pages/homepage/homepage.component.jsx';
import ShopPage from './Pages/shop/shop.component.jsx';
import CheckoutPage from './Pages/checkout/checkout.component';
import SignInPage from './Pages/Sign-in/signin.component';

import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Component/header/header.component';
import { auth, createUserProfileDocument} from './firebase/firebase.utils'
import React from 'react';
import SignUp from './Component/Sign-up-Component/sign-up.component';
import {setCurrentUser} from './Redux/user/user.actions'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './Redux/user/user.selector';


class App extends React.Component {
  unsubscribeFromAuth = null


  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }else setCurrentUser({userAuth});
    })
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path ="/checkout" component={CheckoutPage}/>
          <Route exact path='/SignIn' render={()=> this.props.currentUser ? (<Redirect to ="/"/>) : (<SignInPage/>)}/>
          <Route exact path='/signup' component={SignUp}/>
        </Switch>
      </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


const mapDispatchToProp = dispatch => ({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProp) (App);
