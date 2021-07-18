import { createStore, combineReducers, compose } from 'redux';
import usersReduser from './reducers/usersReduser';

const rootReduser = combineReducers ({
   array: usersReduser,
});

const store = createStore(
   rootReduser,
   compose(
      window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
   )
);

export default store;

