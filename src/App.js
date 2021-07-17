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
import NotFoundPage from './components/notFoundPage/NotFoundPage';

function App() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAuthAdmin, setAuthAdmin] = useState(true);
  const [isAuth, setAuth] = useState(true);
  const [filter, setFilter] = useState('popularity.desc');
  
  const totalPages = 10;

  const isValueFilter = (value) => {
    setFilter(value);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=00397e0061d58cd6161f47a5da66eda4&language=en-US&sort_by=${filter}&include_adult=false&include_video=false&page=${currentPage}`)
    .then((response) => response.json())
    .then(json => setCards(json.results))
  }, [currentPage, filter]);

  const paginate = (pageNumber) => {setCurrentPage(pageNumber)};

  const prevPage = () => {
    (currentPage > 1)  ? setCurrentPage(prev => prev - 1) : setCurrentPage(1)
  }

  const nextPage = () => {
    (currentPage < totalPages) ? setCurrentPage(prev => prev + 1) : setCurrentPage(totalPages);
  }

  const deleteFilm = (id) => {
    setCards(cards.filter(film => film.id !== id))
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="wrapper">
            <Header
              isAuth={isAuth}
              isAuthAdmin={isAuthAdmin}
              onOutClick={setAuth}
              changeAuthAdmin={setAuthAdmin}
              isValueFilter={isValueFilter}
            />
            <Main 
              cards={cards}
              isAuthAdmin={isAuthAdmin}
              isAuth={isAuth}
              deleteFilm={deleteFilm}
            />
            <Footer 
              paginate={paginate}
              prevPage={prevPage}
              nextPage={nextPage}
              totalPages={totalPages}
              currentPage={currentPage}
            />
          </div>
        </Route>
        <Route exact path="/film/:id">
          <div className="wrapper">
            <Header
              isAuth={isAuth}
              onOutClick={setAuth}
              changeAuthAdmin={setAuthAdmin}
            />
            <Film 
              cards={cards}
              isAuth={isAuth}
              isAuthAdmin={isAuthAdmin}
              deleteFilm={deleteFilm}
            />
          </div>
        </Route>
        <Route exact path="/signIn">
          <SignIn 
            isAuthAdmin={isAuthAdmin}
            onAuthClick={setAuth}
            changeAuthAdmin={setAuthAdmin}
          />
        </Route>
        <Route exact path="/registration" component={RegistrationPage}/>
        <Route exact path="/addMovie">
          <AddMovie
            onOutClick={setAuth}
            changeAuthAdmin={setAuthAdmin}
          />
        </Route>
        <Route exact path="/notFoundPage" component={NotFoundPage}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
