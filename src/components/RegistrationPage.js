import React from 'react';

import './FormPages.css';
import ButtonSubmit from './forms/ButtonSubmit';
import HomeLink from './HomeLink';

const RegistrationPage = () => {
   return (
      <main className="form-wrapper">
         <section className="form-card">
            <HomeLink/>
            <h1 className="form-card__title">Registration</h1>
            <form className="form-card__information" action="" method="POST">

                  <div className="input-block">
                     <label htmlFor="user_name">Name</label>
                     <input 
                        type="text" 
                        name="name" 
                        id="user_name" 
                        required 
                        minLength="6"
                     />
                     <span className="warning-text user-name"></span>
                  </div>

                  <div className="input-block">
                     <label htmlFor="user_surname">Surname</label>
                     <input 
                        type="text" 
                        name="surname" 
                        id="user_surname" 
                        required
                        minLength="6"
                     />
                     <span className="warning-text user-surname"></span>
                  </div>

                  <div className="input-block">
                     <label htmlFor="user_email">Email</label>
                     <input 
                        type="email" 
                        name="email" 
                        id="user_email" 
                        required
                     />
                     <span className="warning-text user-email-double"></span>
                  </div>

                  <div className="input-block">
                     <label htmlFor="user_password">Password</label>
                     <input 
                        type="password" 
                        name="password" 
                        id="user_password" 
                        required 
                        minLength="6"
                     />
                     <span className="warning-text password-warning-text"></span>
                  </div>

                  <div className="input-block">
                     <label htmlFor="user_confirm_password">Confirm Password</label>
                     <input 
                        type="password" 
                        name="confirm_password" 
                        id="user_confirm_password" 
                        required
                        minLength="6"
                     />
                     <span className="warning-text confirm-password-warning-text"></span>
                  </div>

               <div className="button-block">
                  <ButtonSubmit name="Sign Up"/>
                  <button className="button-block__btn clear" type="reset">Clear</button>
               </div>
            </form>
         </section>
      </main>
   )
}

export default RegistrationPage;