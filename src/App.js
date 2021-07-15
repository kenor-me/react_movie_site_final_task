import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import './App.css';
import AddMovie from './components/AddMoviePage';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import RegistrationPage from './components/RegistrationPage';
import SignIn from './components/SigInPage';
import Film from './components/card/Film';

function App() {
  const [cards, setCard] = useState([]);

  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=00397e0061d58cd6161f47a5da66eda4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then((response) => response.json())
      .then(json => setCard(json.results))
  },[]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="wrapper">
            <Header/>
            <Main cards={cards}/>
            <Footer/>
          </div>
        </Route>
        <Route exact path="/film/:id">
          <div className="wrapper">
            <Header/>
            <Film cards={cards}/>
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
