import React from 'react';
import PropTypes from 'prop-types';

import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({ title, release_date, vote_average, poster_path, id, isAuthAdmin }) => {

   let path = '';
   
   (poster_path) && (path = `https://image.tmdb.org/t/p/w200/${poster_path}`)

   return (
      <li className="movie__card">
         <div>
            <div className="releas">{release_date}</div>
            <div className="raiting">{vote_average}</div>
            <div className="img__block">
               <Link to={`/film/${id}`}>
                  <img className="img" src={path}  alt="movie"/>
               </Link>
               {isAuthAdmin && (
                  <div className="del-card-btn">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M16 9v4.501c-.748.313-1.424.765-2 1.319v-5.82c0-.552.447-1 1-1s1 .448 1 1zm-4 0v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1s1 .448 1 1zm1.82 15h-11.82v-18h2v16h8.502c.312.749.765 1.424 1.318 2zm-6.82-16c.553 0 1 .448 1 1v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1zm14-4h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711v2zm-1 2v7.182c-.482-.115-.983-.182-1.5-.182l-.5.025v-7.025h2zm3 13.5c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-3.086-2.122l-1.414 1.414-1.414-1.414-.707.708 1.414 1.414-1.414 1.414.707.708 1.414-1.414 1.414 1.414.708-.708-1.414-1.414 1.414-1.414-.708-.708z"/></svg>
                  </div>
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
   poster_path: PropTypes.string.isRequired,
   isAuthAdmin: PropTypes.bool
};

export default Card;