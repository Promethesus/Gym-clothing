import './App.css';
import HomePage from './Pages/homepage/homepage.component.jsx'
import { Switch, Route } from 'react-router-dom'

const BroTankPage = () => (
  <div>
    <h1>
      brotanks
    </h1>
  </div>
)

const JacketsPage = () => (
  <div>
    <h1>
      jackets
    </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='shop/brotanks' component={BroTankPage}/>
        <Route path='/jackets' component={JacketsPage}/>
      </Switch>
    </div>
  );
}

export default App;
