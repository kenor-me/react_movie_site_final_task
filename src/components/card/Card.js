import React from 'react';
import PropTypes from 'prop-types';

import './Card.css'
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const Card = ({ title, release_date, vote_average, poster_path, id, isAuthAdmin, isAuth, deleteFilm }) => {

   let path = '';
   
   (poster_path) && (path = `https://image.tmdb.org/t/p/w200/${poster_path}`)

   return (
      <li className="movie__card">
         <div>
            <div className="release">{release_date}</div>
            <div className="rating">{vote_average}</div>
            <div className="img__block">
               <Link to={`/film/${id}`}>
                  <img className="img" src={path}  alt="movie"/>
               </Link>
               {isAuthAdmin && isAuth && (
                  <DeleteButton deleteFilm={deleteFilm} id={id}/>
               )}
            </div>
            <Link to={`/${id}`}>
               <h3 className="title">{title}</h3>
            </Link>
         </div>
         
      </li>
   )
}

Card.propTypes = {
   id: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   release_date: PropTypes.string.isRequired,
   vote_average: PropTypes.number.isRequired,
   poster_path: PropTypes.string,
   isAuthAdmin: PropTypes.bool,
   isAuth: PropTypes.bool,
   deleteFilm: PropTypes.func.isRequired
};

export default Card;