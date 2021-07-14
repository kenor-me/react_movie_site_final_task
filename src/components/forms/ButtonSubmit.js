import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonSubmit = ({ name }) => {
   const history = useHistory();
   const handleOnClick = (e) => {
      e.preventDefault();
      history.push("/");
   }

   return (
      <button 
         className="button-block__btn" 
         type="submit" 
         // disabled
         onClick={handleOnClick}
      >{name}</button>
   )
}

ButtonSubmit.propTypes = {
   name: PropTypes.string
};

export default ButtonSubmit;