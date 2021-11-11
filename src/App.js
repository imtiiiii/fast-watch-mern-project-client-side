import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import LoginAndReg from './Components/LoginAndReg/LoginAndReg'
import AuthProvider from './Context/AuthProvider';
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
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
