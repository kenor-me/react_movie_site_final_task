import React from 'react';

import './FormPages.css';
import ButtonSubmit from './forms/ButtonSubmit';
import HomeLink from './HomeLink';

const AddMovie = () => {
   return (
      <main className="form-wrapper">
         <section className="form-card">
            <HomeLink/>
            <h1 className="form-card__title">About the film</h1>
            <form className="form-card__information" action="" method="POST">
         
               <div className="input-block">
                  <label htmlFor="add_title">title</label>
                  <input 
                     type="text" 
                     name="title" 
                     id="add_title" 
                     required
                     minLength="3"
                  />
                  <span className="warning-text add-title"></span>
               </div>
               <div className="input-block">
                  <label htmlFor="add_overview">overview</label>
                  <textarea 
                     name="overview" 
                     id="add_overview" 
                     cols="30" 
                     rows="5" 
                     required
                     minLength="6" 
                     maxLength="150"
                  />
                  <span className="warning-text add-overview"></span>
               </div>
               <div className="input-block">
                  <label htmlFor="add_path">poster_path</label>
                  <input 
                     type="text" 
                     name="poster_path" 
                     id="add_path" 
                     required
                  />
                  <span className="warning-text add-path"></span>
               </div>
               <div className="input-block">
                  <label htmlFor="add_popularity">popularity</label>
                  <input 
                     type="text" 
                     name="popularity" 
                     id="add_popularity" 
                     required
                     title="you should to enter only numbers"
                     pattern="[0-9]{1,10}"
                  />
                  <span className="warning-text add-popularity"></span>
               </div>
               <div className="input-block">
                  <label htmlFor="add_release">release_date</label>
                  <input 
                     type="text" 
                     name="release" 
                     id="add_release" 
                     required
                  />
                  <span className="warning-text add-release"></span>
               </div>
               <div className="input-block">
                  <span>genres</span>
                  <select className="add-genres-filter" name="genres">
                     <option value="Action" defaultValue>Action</option>
                     <option value="Adventure">Adventure</option>
                     <option value="Animation">Animation</option>
                     <option value="Comedy">Comedy</option>
                     <option value="Crime">Crime</option>
                     <option value="Documentary">Documentary</option>
                     <option value="Drama">Drama</option>
                     <option value="Family">Family</option>
                     <option value="Fantasy">Fantasy</option>
                     <option value="History">History</option>
                     <option value="Horror">Horror</option>
                     <option value="Music">Music</option>
                     <option value="Mystery">Mystery</option>
                     <option value="Romance">Romance</option>
                     <option value="Science Fiction">Science Fiction</option>
                     <option value="Thriller">Thriller</option>
                     <option value="War">War</option>
                     <option value="Western">Western</option>
                  </select>
               </div>
               {/* <div className="add-ganres">
                  <button class="add-ganres__btn"><img src="img/content/vector_plus.svg" alt="add"></button>
                  <span className="add-ganres__text">Add genres</span>
               </div> */}
               <div className="input-block">
                  <label htmlFor="add_vote">vote_average</label>
                  <input 
                     type="text" 
                     name="vote_average" 
                     id="add_vote" 
                     required
                     title="you should to enter only numbers" 
                     pattern="[0-9]{1,10}"
                  />
                  <span className="warning-text add-vote"></span>
               </div>
               <div className="input-block">
                  <label htmlFor="add_vote_count">vote_count</label>
                  <input 
                     type="text" 
                     name="vote_count" 
                     id="add_vote_count" 
                     required
                     title="you should to enter only numbers" 
                     pattern="[0-9]{1,10}"
                  />
                  <span className="warning-text add-vote-count"></span>
               </div>
               <div className="input-block">
                  <label>
                     <input type="checkbox" className="checkbox__input"/>
                     <span className="add-checkbox__box"></span>
                     <span className="add-checkbox__text">Admin</span>
                  </label>
                  <span className="warning-text add-vote-count"></span>
               </div>

               <div className="button-block">
                  <ButtonSubmit name="Add"/>
                  <button className="button-block__btn clear" type="reset">Clear</button>
               </div>
            </form>
         </section>
      </main>
   )
}

export default AddMovie;