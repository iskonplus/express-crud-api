import { users } from './db.js';
import { randomUUID } from 'crypto';

export const getRandomId = () => randomUUID();

export const findAllUsers = () => users;
export const findUserById = (id) => users.find(user => user.id === id);
export const getUserIndex = userId => users.findIndex(user => user.id === userId);
export const deleteCurrentUser = userIndex => users.splice(userIndex, 1);

export const isUserDataValid = (name, age) => {
    return typeof name === 'string' || typeof age === 'number';
}


