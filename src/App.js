import './App.css';
import HomePage from './Pages/homepage/homepage.component.jsx'
import ShopPage from './Pages/shop/shop.component.jsx';
import { Switch, Route } from 'react-router-dom'
import Header from './Component/header/header.component';
import SignInPage from './Pages/Sign-in/signin.component';
import { auth, createUserProfileDocument} from './firebase/firebase.utils'
import React from 'react';
import SignUp from './Component/Sign-up-Component/sign-up.component';

class App extends React.Component {
  constructor() {
    super();
    

    this.state ={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }else this.setState({currentUser: userAuth});
    })
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/SignIn' component={SignInPage}/>
          <Route exact path='/signup' component={SignUp}/>
        </Switch>
      </div>
  );
}
}
export default App;
