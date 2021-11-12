import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import LoginAndReg from './Components/LoginAndReg/LoginAndReg'
import AuthProvider from './Context/AuthProvider';
import ExploreProducts from './Components/ExploreProducts/ExploreProducts';
import AddProduct from './Components/AddProduct/AddProduct';
const axios = require('axios');
function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Switch>
            {/* Home compo */}
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/login">
              <LoginAndReg></LoginAndReg>
            </Route>
            <Route path='/explore'>
              <ExploreProducts></ExploreProducts>
            </Route>
            <Route path="/addproduct">
              <AddProduct></AddProduct>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
