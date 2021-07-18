import { ADD_USERS } from '../constants';

const initialState = {
   isLoaded: true,
   users: [],
};

const usersReduser = (state = initialState, action)=> {
   switch(action.type) {
      case ADD_USERS:
         return {
            ...state,
            users: [...state.users, action.payload],
         };
      default: 
         return state;
   }

}

export default usersReduser;