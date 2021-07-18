import { ADD_USERS } from '../constants';

export const addUsers = (value) => ({
   type: ADD_USERS,
   payload: value,
});