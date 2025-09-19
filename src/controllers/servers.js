import { findAllUsers, findUserById, createNewUser, isUserDataValid, getUserIndex, getRandomId } from "../utils.js";
import { users } from "../db.js";

export const getAllUsers = (req, res) => {
    res.json(findAllUsers());
}

export const getUserById = (req, res) => {
    const id = req.params.id;
    const user = findUserById(id);

    !user ?
        res.status(404).json({ error: true, errorText: 'User not found' }) :
        res.json(user);
}


export const createUser = (req, res) => {
    const { name, age } = req.body || {};

    if (!isUserDataValid(name, age)) {
        return res.status(400).json({ error: true, errorText: 'Missing or invalid required fields' });
    }

    const newUser = { name, age, id: getRandomId() };
    users.push(newUser);

    return res.status(201).json(newUser);
}

export const updateUser = (req, res) => {
    const id = req.params.id
    const userIndex = getUserIndex(id);

    if (userIndex === -1) {
        return res.status(404).json({ error: true, errorText: 'User not found' });
    }

    const { name, age } = req.body || {};
    const updatedUserData = { name, age, id };
    users[userIndex] = updatedUserData;

    !isUserDataValid(name, age) ?
        res.status(400).json({ error: true, errorText: 'Missing or invalid required fields' }) :
        res.status(200).json(updatedUserData);

}