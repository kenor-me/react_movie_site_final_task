import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import './FormPages.css';
// import ButtonSubmit from './forms/ButtonSubmit';
import HomeLink from './HomeLink';


const SignIn = ({ isAuthAdmin, onAuthClick, changeAuthAdmin }) => {

   const history = useHistory();
   const handleClick = (e) => {
      e.preventDefault();
      history.push("/");

      onAuthClick(true);
      console.log(changeAuthAdmin);
      console.log(isAuthAdmin);
   }

   return (
      <main className="form-wrapper">
         <section className="form-card">
            <HomeLink/>
            <h1 className="form-card__title">Sign In or Registration</h1>
            <form className="form-card__information">
                  <div className="input-block">
                     <label htmlFor="user_email">Email</label>
                     <input 
                        type="email" 
                        name="email" 
                        id="user_email" 
                        required
                     />
                     <span className="warning-text user-wrong-email"></span>
                  </div>
                  <div className="input-block">
                     <label htmlFor="user_password">Password</label>
                     <input 
                        type="password" 
                        name="password" 
                        id="user_password" 
                        required
                     />
                     <span className="warning-text user-wrong-pass"></span>
                  </div>
                  <div className="button-block">
                     <button 
                        className="button-block__btn" 
                        type="submit" 
                        // disabled
                        onClick={handleClick}
                     >Sign</button>
                     <Link className="button-block__btn" to="/registration">Registration</Link>
                  </div>
            </form>
         </section>
      </main>
   )
}

SignIn.propTypes = {
   isAuthAdmin: PropTypes.bool,
   onAuthClick: PropTypes.func,
   changeAuthAdmin: PropTypes.func
}

export default SignIn;