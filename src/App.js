import './App.css';
import HomePage from './Pages/homepage/homepage.component.jsx'
import ShopPage from './Pages/shop/shop.component.jsx';
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
