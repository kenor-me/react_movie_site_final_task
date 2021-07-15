// import React, { useEffect, useState } from 'react';
import React from 'react';
import Card from './card/Card';
import PropTypes from 'prop-types';

const Main = ({ cards }) => {
   // const [cards, setCard] = useState([]);

   // useEffect(() => {
   //    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=00397e0061d58cd6161f47a5da66eda4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
   //    .then((response) => response.json())
   //    // .then(json => console.log(json.results))
   //    .then(json => setCard(json.results))
   // },[]);

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
                  />
               ))}
            </ul>
         </section>
      </main>
   )
}

Main.propTypes = {
   cards: PropTypes.array.isRequired
}

export default Main;