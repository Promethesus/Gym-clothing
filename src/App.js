import './App.css';
import HomePage from './Pages/homepage/homepage.component.jsx'
import ShopPage from './Pages/shop/shop.component.jsx';
import { Switch, Route } from 'react-router-dom'
import Header from './Component/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
