import React from 'react';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './FormPages.css';
import HomeLink from './HomeLink';

const RegistrationPage = ({ paramsFunc, users }) => {
   const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode:"onChange" });
   const history = useHistory();
   // console.log(typeof users, users);

   const onSubmit = (data) => {
      paramsFunc(data);
      history.push("/");
   };
   watch('user', 'surname', 'email', 'password', 'confirm_password');

   return (
      <main className="form-wrapper">
         <section className="form-card">
            <HomeLink/>
            <h1 className="form-card__title">Registration</h1>
            <form className="form-card__information" action="" method="POST" >
                  <div className="input-block">
                     <label htmlFor="user_name">Name</label>
                     <input 
                        {...register("user", { required: true, minLength: 6})}
                        type="text" 
                        id="user_name" 
                     />
                     {errors.user && <span className="error">enter more than 6 characters</span>}
                  </div>

                  <div className="input-block">
                     <label htmlFor="user_surname">Surname</label>
                     <input 
                        {...register("surname", { required: true, minLength: 6})}
                        type="text" 
                        id="user_surname" 
                     />
                     {errors.surname && <span className="error">enter more than 6 characters</span>}
                  </div>

                  <div className="input-block">
                     <label htmlFor="user_email">Email</label>
                     {/* !не работает валидация имейла */}
                     <input 
                        {...register("email", { required: true, validate: (value) => users.map(item => item.email !== value)})}
                        type="email" 
                        id="user_email" 
                     />
                     {errors.email && <span className="error">required  to fill</span>}
                  </div>

                  <div className="input-block">
                     <label htmlFor="user_password">Password</label>
                     <input 
                        {...register("password", { required: true, minLength: 6})}
                        type="password" 
                        id="user_password" 
                     />
                     {errors.password && <span className="error">enter more than 6 characters</span>}
                  </div>

                  <div className="input-block">
                     <label htmlFor="user_confirm_password">Confirm Password</label>
                     <input 
                        {...register("confirm_password", { required: true, minLength: 6, validate: (value) => value === watch('password')})}
                        type="password" 
                        id="user_confirm_password" 
                     />
                     {errors.confirm_password && <span className="error">enter correct confirm password</span>}
                  </div>

               <div className="button-block">
                  <button 
                     className="button-block__btn" 
                     type="submit" 
                     onClick={handleSubmit(onSubmit)}
                  >Sign Up</button>
                  <button className="button-block__btn clear" type="reset">Clear</button>
               </div>
            </form>
         </section>
      </main>
   )
}

RegistrationPage.propTypes = {
   paramsFunc: PropTypes.func,
   users: PropTypes.array
}

export default RegistrationPage;