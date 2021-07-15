import React from 'react';
import { Link } from 'react-router-dom';

import './FormPages.css';
import ButtonSubmit from './forms/ButtonSubmit';
import HomeLink from './HomeLink';


const SignIn = () => {
   // const [users, setUsers] = useState([]);

   return (
      <main className="form-wrapper">
         <section className="form-card">
            <HomeLink/>
            <h1 className="form-card__title">Sign In or Registration</h1>
            <form className="form-card__information" action="" method="POST">
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
                     <ButtonSubmit name="Sign"/>
                     <Link className="button-block__btn" to="/registration">Registration</Link>
                  </div>
            </form>
         </section>
      </main>
   )
}

export default SignIn;