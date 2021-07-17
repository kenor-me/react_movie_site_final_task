import React from 'react';
import HomeLink from '../HomeLink';

import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
   return (
      <main className="wrapper">
         <section className={s.block}>
            <p className={s.text}>Ooops...</p>
            <h1 className={s.title}>Page not found</h1>
            <p className={s.subtitle}>Go back home, please</p>
            <HomeLink className={s.link}/>
         </section>
         <p className={s.numb}>404</p>
      </main>
   )
}

export default NotFoundPage;