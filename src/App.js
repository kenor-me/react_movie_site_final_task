import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import './App.css';
import AddMovie from './components/AddMoviePage';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import RegistrationPage from './components/RegistrationPage';
import SignIn from './components/SigInPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <div className="wrapper">
              <Header/>
              <Main/>
              <Footer/>
            </div>
        </Route>
        <Route exact path="/signIn" component={SignIn}/>
        <Route exact path="/registration" component={RegistrationPage}/>
        <Route exact path="/addMovie" component={AddMovie}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
