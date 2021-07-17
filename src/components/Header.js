import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ isAuth, onOutClick, isAuthAdmin, changeAuthAdmin, isValueFilter }) => {
   const handleClick =() => {
      onOutClick(false);
      changeAuthAdmin(false);
   }

const handleChange = (e) => {
   isValueFilter(e.target.value)
}

   return (
      <header>
         <div className="header">
            <Link to="/" className="header__link">
               <svg className="header__icon" xmlns="http://www.w3.org/2000/svg" fill="#d2d5d8" viewBox="0 0 50 50" width="35px" height="35px">
                  <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
               </svg>
               <p>Movies</p>
            </Link>
            <div className="header__block">

               {isAuthAdmin && isAuth &&
               (<Link to="/addMovie" className="header__link-add"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"></path>
                  </svg>
               </Link>)}
               
               <select className="filter" name="filter" onChange={handleChange}>
                  <option value="popularity.desc" defaultValue>Popularity</option>
                  <option value="vote_count.desc">Vote rating</option>
                  <option value="primary_release_date.desc">Release date</option>
               </select>

               {isAuth && (<div className="username">User name</div>)}

               {isAuth ? (<Link to="/" onClick={handleClick} className="header__button">Log Out</Link>) : (<Link to="/signIn" className="header__button">Sign In / Sign Up</Link>)}
               
            </div>

         </div>
      </header>
   )
}

Header.propTypes = {
   isAuth: PropTypes.bool,
   onOutClick: PropTypes.func,
   changeAuthAdmin: PropTypes.func,
   isAuthAdmin: PropTypes.bool,
   isValueFilter: PropTypes.func
}

export default Header;