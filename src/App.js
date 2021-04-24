import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/Header.jsx';
import Nav from './Components/Nav/Nav.jsx';
import Main from './Components/Main/Main.jsx';
import Functions from './Components/Functions/Functions.jsx';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Router>
          <Nav data={props.nav} />
          <Main />
          <Functions />
        </Router>
      </div>
    </div>
  );
}

export default App;
