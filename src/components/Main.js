import React from 'react';
import PropTypes from 'prop-types';

import Card from './card/Card';

const Main = ({ cards, isAuthAdmin, isAuth }) => {
   return (
      <main>
         <section className="movies-block">
            <ul className="movies">
               {cards.map(item => (
                  <Card
                     key={item.id}
                     film={item}
                     id={item.id}
                     title={item.title}
                     release_date={item.release_date}
                     vote_average={item.vote_average}
                     poster_path={item.poster_path}
                     isAuthAdmin={isAuthAdmin}
                     isAuth={isAuth}
                  />
               ))}
            </ul>
         </section>
      </main>
   )
}

Main.propTypes = {
   cards: PropTypes.array.isRequired,
   isAuthAdmin: PropTypes.bool,
   isAuth: PropTypes.bool
}

export default Main;