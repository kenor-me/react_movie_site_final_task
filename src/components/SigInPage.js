import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import './FormPages.css';
import HomeLink from './HomeLink';


const SignIn = ({ onAuthClick, changeAuthAdmin, users }) => {
   const [values, setValue] = useState({
      email: '',
      password: ''
   });
   const [disabled, setDisabled] = useState(true);

   //  как перебирать массив динамически? 
   const admin = users[1];
   const userAuth = users[0];
   const history = useHistory();
   const handleClick = (e) => {
      e.preventDefault();
      onAuthClick(true);
      (values.email === admin.email) && (values.password === admin.password) && changeAuthAdmin(true);
      history.push("/");
   }

   const handleChange = (e) => {
      setValue({
         ...values,
         [e.target.name]: e.target.value,
      });
   }

   useEffect(() => {
      // console.log(values);
      // при перезагрузке страницы нужно очистить useEffect, разобраться как!!!
      (values.email === admin.email) && (values.password === admin.password) && setDisabled(false);
      (values.email === userAuth.email) && (values.password === userAuth.password) && setDisabled(false);
      // return () => {
      // }
   }, [admin, values, userAuth])

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
                        id="user_email" 
                        required
                        name="email" 
                        value={values.email}
                        onChange={handleChange}
                     />
                  </div>
                  <div className="input-block">
                     <label htmlFor="user_password">Password</label>
                     <input 
                        type="password" 
                        id="user_password" 
                        required
                        name="password" 
                        value={values.password}
                        onChange={handleChange}
                     />
                     
                  </div>
                  <div className="button-block">
                     <button 
                        className="button-block__btn" 
                        type="submit" 
                        disabled={disabled}
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
   onAuthClick: PropTypes.func,
   changeAuthAdmin: PropTypes.func,
   users: PropTypes.array
}

export default SignIn;