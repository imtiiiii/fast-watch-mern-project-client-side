import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          {/* Home compo */}
          <Route path="/" exact>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
