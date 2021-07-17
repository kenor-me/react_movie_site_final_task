import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Footer.css'

const Footer = ({ paginate, prevPage, nextPage, totalPages, currentPage }) => {

   const pageNumbers = [];
   for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
   }

   return (
      <footer className="pagination">
         <h2>Pagination</h2>
         <ul className="pagination__list" >
            {(currentPage > 1) && (
               <li className="btn prev">
               <Link
                  to="/"
                  onClick={() => prevPage()}
               >Prev</Link></li>
            )}
            
            {
               pageNumbers.map(page => (
                  <li 
                     key={page} 
                     className={"numb" + ((currentPage === page) ? ' active':'')}>
                     <Link 
                        to="/"
                        onClick={() => paginate(page)}
                     >{page}</Link>
                  </li>
               ))
            }
            {/* <li className="dots">...</li> */}
            {(currentPage < totalPages) && (
               <li className="btn next">
               <Link 
                  to="/"
                  onClick={() => nextPage()}
               >Next</Link></li>
            )}
            
         </ul>
      </footer>
   )
}

Footer.propTypes = {
   paginate: PropTypes.func.isRequired,
   nextPage: PropTypes.func.isRequired,
   prevPage: PropTypes.func.isRequired,
   totalPages: PropTypes.number.isRequired,
   currentPage: PropTypes.number.isRequired
}

export default Footer;