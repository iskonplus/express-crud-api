import { users } from './db.js';


export const findAllUsers = () => users;
export const findUserById = (id) => users.find(user => user.id === id)[0];

