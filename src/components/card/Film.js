import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Film.css'

const Film = ({ cards, isAuth, isAuthAdmin }) => {
   const {id} = useParams();
   const film = cards.find((item) => item.id === Number(id))
   const keyGenres = film.genre_ids;
   const [genres, setGenres] = useState([]);
   const param = film.vote_count;
   const [count, setCount] = useState(param);

   useEffect(() => {
      fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=00397e0061d58cd6161f47a5da66eda4&language=en-US')
      .then((response) => response.json())
      .then(json => setGenres(json.genres))
   }, []);

   const handleChangeValue = (e) => {
      setCount(param + Number(e.target.value));
   }

   let genreFilm = '';
   let n = 0;
   genres.forEach( key => {
      keyGenres.forEach( i => {
         if (key.id === i) {
            n++;
            (keyGenres.length === n) ? (genreFilm += `${key.name} `) : (genreFilm += `${key.name}, `);
         }
      });
   });

   return (
      <main>
         <section className="movie-information">
            <h2>Movies</h2>
            <img className="movie-information__img" src={`https://image.tmdb.org/t/p/w400/${film.poster_path}`} alt="movie"/>
            {isAuthAdmin && isAuth && (
               <div className="movies-information__btn-block">
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#ffffff"><path d="M16 9v4.501c-.748.313-1.424.765-2 1.319v-5.82c0-.552.447-1 1-1s1 .448 1 1zm-4 0v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1s1 .448 1 1zm1.82 15h-11.82v-18h2v16h8.502c.312.749.765 1.424 1.318 2zm-6.82-16c.553 0 1 .448 1 1v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1zm14-4h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711v2zm-1 2v7.182c-.482-.115-.983-.182-1.5-.182l-.5.025v-7.025h2zm3 13.5c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-3.086-2.122l-1.414 1.414-1.414-1.414-.707.708 1.414 1.414-1.414 1.414.707.708 1.414-1.414 1.414 1.414.708-.708-1.414-1.414 1.414-1.414-.708-.708z"></path></svg>
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#ffffff"><path d="M14.078 4.232l-12.64 12.639-1.438 7.129 7.127-1.438 12.641-12.64-5.69-5.69zm-10.369 14.893l-.85-.85 11.141-11.125.849.849-11.14 11.126zm2.008 2.008l-.85-.85 11.141-11.125.85.85-11.141 11.125zm18.283-15.444l-2.816 2.818-5.691-5.691 2.816-2.816 5.691 5.689z"></path></svg>
            </div>
            )}
            
            <div className="movie-information__text-block text-block">
               <p className="text-block__title">{film.title}</p>
               <p className="text-block__genre">{genreFilm}</p>
               <p className="text-block__subtitle">About the film</p>
               <p className="text-block__rating"><span>movie rating:</span>{film.vote_average}</p>
               <p className="text-block__vote"><span>vote count:</span>{count}</p>
               <p><span>release date:</span>{film.release_date}</p>
               <p><span>overview:</span>{film.overview}</p>
               {(isAuth && !isAuthAdmin) && (
                  <select className="add-vote-rating" name="vote(rating)" onChange={handleChangeValue}>
                  <option className="add-vote--option" value="0" defaultValue>vote(rating)</option>
                  <option className="add-vote--option" value="1">1</option>
                  <option className="add-vote--option" value="2">2</option>
                  <option className="add-vote--option" value="3">3</option>
                  <option className="add-vote--option" value="4">4</option>
                  <option className="add-vote--option" value="5">5</option>
                  <option className="add-vote--option" value="6">6</option>
                  <option className="add-vote--option" value="7">7</option>
                  <option className="add-vote--option" value="8">8</option>
                  <option className="add-vote--option" value="9">9</option>
                  <option className="add-vote--option" value="10">10</option>
               </select>
               )}
               
            </div>
         </section>
      </main>
   )
}

Film.propTypes = {
   cards: PropTypes.array.isRequired,
   isAuth: PropTypes.bool.isRequired,
   isAuthAdmin: PropTypes.bool.isRequired
}

export default Film;