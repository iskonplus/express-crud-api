import { users } from './db.js';
import { randomUUID } from 'crypto';

export const getRandomId = () => randomUUID();

export const findAllUsers = () => users;
export const findUserById = (id) => users.find(user => user.id === id);
export const createNewUser = (user) => {
    users.push(user);
    return user;
}


export const isUserDataValid = (name, age) => {
    return typeof name === 'string' || typeof age === 'number';
}


