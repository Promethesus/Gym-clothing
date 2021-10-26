import './App.css';
import HomePage from './Pages/homepage/homepage.component.jsx'
import ShopPage from './Pages/shop/shop.component.jsx';
import { Switch, Route } from 'react-router-dom'
import Header from './Component/header/header.component';
import SignInPage from './Pages/Sign-in/signin.component';
import { auth } from './firebase/firebase.utils'
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    

    this.state ={
      currentUser:null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user)
    })
  }


  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }


  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInPage}/>
        </Switch>
      </div>
  );
}
}
export default App;
