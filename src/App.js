import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import LoginAndReg from './Components/LoginAndReg/LoginAndReg'
import AuthProvider from './Context/AuthProvider';
import ExploreProducts from './Components/ExploreProducts/ExploreProducts';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import Buy from './Components/Shared/Buy/Buy';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Reviews from './Components/Header/Reviews/Reviews';
const axios = require('axios');
function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <LoginAndReg></LoginAndReg>
            </Route>
            <Route path='/explore'>
              <ExploreProducts></ExploreProducts>
            </Route>
            {/* <PrivateRoute path="/addproduct">
              <AddProduct></AddProduct>
            </PrivateRoute> */}
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/:buy" exact>
              <Buy></Buy>
            </PrivateRoute>
          </Switch>

        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
