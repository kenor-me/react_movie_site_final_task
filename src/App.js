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
import list from './dummy_data/users.json';

function App() {
  const [cards, setCards] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAuthAdmin, setAuthAdmin] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [filter, setFilter] = useState('popularity.desc');
  const [name, setName] = useState(1);
  const [hidden, setHidden] = useState(false);

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

  useEffect(() => {
    setUsers(list);
  }, []);


  useEffect(() => {
    if(sessionStorage.getItem('isUser')) {
      const data = sessionStorage.getItem('isUser');
      if (data != 1) {
        setName(JSON.parse(data));
        setAuth(true);
      }
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem('isUser', JSON.stringify(name));
  }, [name])

  useEffect(() => {
    (name.user === 'admin') && setAuthAdmin(true);
    (isAuth === false) &&  sessionStorage.setItem('isUser', 1);
  }, [isAuth, name])

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

  const addFilm = (data) => {
    setCards([
      {
        title: data.title,
        overview: data.overview,
        poster_path: data.poster_path,
        popularity: Number(data.popularity),
        release_date: data.release_date,
        id: Number(data.id),
        vote_average: Number(data.vote_average),
        vote_count: Number(data.vote_count),
        genre_ids: data.genre_ids
      }, ...cards
    ])
  }

  const paramsFunc = (val) => {
    setUsers([
      ...users, {
        user: val.user,
        email: val.email,
        password: val.password
      }
    ])
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
              name={name.user}
              hidden={hidden}
              onHidden={setHidden}
            />
            <Main 
              cards={cards}
              isAuthAdmin={isAuthAdmin}
              isAuth={isAuth}
              deleteFilm={deleteFilm}
              onHidden={setHidden}
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
              name={name.user}
              hidden={hidden}
              onHidden={setHidden}
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
            onAuthClick={setAuth}
            changeAuthAdmin={setAuthAdmin}
            users={users}
            getIndex={setName}
          />
        </Route>
        <Route exact path="/registration">
          <RegistrationPage 
            paramsFunc={paramsFunc}
            users={users}
            onAuthClick={setAuth}
          />
        </Route>
        <Route exact path="/addMovie">
          <AddMovie
            onOutClick={setAuth}
            changeAuthAdmin={setAuthAdmin}
            addFilm={addFilm}
          />
        </Route>
        <Route exact path="/notFoundPage" component={NotFoundPage}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
