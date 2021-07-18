import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";

import './FormPages.css';
import ButtonSubmit from './forms/ButtonSubmit';
import HomeLink from './HomeLink';

const AddMovie = ({ onOutClick, changeAuthAdmin }) => {
   const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode:"onChange" });
   const onSubmit = (data) => console.log(data);

   watch('title', 'overview', 'poster_path', 'popularity', 'release_date', 
   'genre_ids', 'vote_average', 'vote_count', 'isAdmin', 'id');

   const handleClick = () => {
      onOutClick(false);
      changeAuthAdmin(false);
   }

   return (
      <main className="form-wrapper">
         <section className="form-card">
            <HomeLink/>
            <Link to="/notFoundPage" onClick={handleClick} className="header__button log-out__link">Log Out</Link>
            <h1 className="form-card__title">About the film</h1>
            <form className="form-card__information" onSubmit={handleSubmit(onSubmit)}>
         
               <div className="input-block">
                  <label htmlFor="add_title">title</label>
                  <input 
                     {...register("title", { required: true, minLength: 3})}
                     type="text"  
                     id="add_title" 
                  />
                  {errors.title && <span className="error">enter more than 3 characters</span>}
                  <span className="warning-text add-title"></span>
               </div>
               <div className="input-block">
                  <label htmlFor="add_overview">overview</label>
                  <textarea 
                     {...register("overview", { required: true, minLength: 6, maxLength: 150})}
                     id="add_overview" 
                     cols="30" 
                     rows="5" 
                  />
                  {errors.overview && <span className="error">enter 6 - 150 characters</span>}
               </div>
               <div className="input-block">
                  <label htmlFor="add_path">poster_path</label>
                  <input 
                     {...register("poster_path", { required: true })}
                     type="text" 
                     id="add_path" 
                  />
                  {errors.overview && <span className="error">enter path</span>}
               </div>
               <div className="input-block">
                  <label htmlFor="add_popularity">popularity</label>
                  <input 
                     {...register("popularity", { required: true })}
                     type="number" 
                     id="add_popularity" 
                  />
                  {errors.popularity && <span className="error">enter only numbers</span>}
               </div>
               <div className="input-block">
                  <label htmlFor="add_release">release_date</label>
                  <input 
                     {...register("release_date", { required: true })}
                     type="date" 
                     id="add_release" 
                  />
                  {errors.release_date && <span className="error">choose date</span>}
               </div>
               <div className="input-block">
                  <label>genres</label>
                  <select 
                     multiple
                     className="add-genres-filter" 
                     {...register("genre_ids", { required: true })}
                  >
                     <option value="28" defaultValue>Action</option>
                     <option value="12">Adventure</option>
                     <option value="16">Animation</option>
                     <option value="35">Comedy</option>
                     <option value="80">Crime</option>
                     <option value="99">Documentary</option>
                     <option value="18">Drama</option>
                     <option value="10751">Family</option>
                     <option value="14">Fantasy</option>
                     <option value="36">History</option>
                     <option value="27">Horror</option>
                     <option value="10402">Music</option>
                     <option value="9648">Mystery</option>
                     <option value="10749">Romance</option>
                     <option value="878">Science Fiction</option>
                     <option value="10770">TV Movie</option>
                     <option value="53">Thriller</option>
                     <option value="10752">War</option>
                     <option value="37">Western</option>
                  </select>
                  {errors.genre_ids && <span className="error">choose 1 or more genres</span>}
               </div>
               <div className="input-block">
                  <label htmlFor="add_vote">vote_average</label>
                  <input 
                     {...register("vote_average", { required: true })}
                     type="number" 
                     id="add_vote" 
                  />
                  {errors.vote_average && <span className="error">enter only numbers</span>}
               </div>
               <div className="input-block">
                  <label htmlFor="add_vote_count">vote_count</label>
                  <input 
                     {...register("vote_count", { required: true })}
                     type="number"  
                     id="add_vote_count" 
                  />
                  {errors.vote_count && <span className="error">enter only numbers</span>}
               </div>
               <div className="input-block">
                  <label htmlFor="add_id">id</label>
                  <input 
                     {...register("id", { required: true })}
                     type="number" 
                     id="add_id" 
                  />
                  {errors.id && <span className="error">enter only numbers</span>}
               </div>
               <div className="input-block">
                  <label>
                     <input 
                        {...register("isAdmin", { required: true })}
                        type="checkbox" 
                        className="checkbox__input"
                     />
                     <span className="add-checkbox__box"></span>
                     <span className="add-checkbox__text">Admin</span>
                  </label>
                  {errors.isAdmin && <span className="error">checked</span>}
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

AddMovie.propTypes = {
   onOutClick: PropTypes.func,
   changeAuthAdmin: PropTypes.func,
}


export default AddMovie;