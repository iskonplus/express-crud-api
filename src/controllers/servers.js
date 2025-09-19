import { findAllUsers, findUserById, createNewUser, isUserDataValid } from "../utils.js";
import { getRandomId } from "../utils.js";

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

    !isUserDataValid(name, age) ?
        res.status(400).json({ error: true, errorText: 'Missing or invalid required fields' }) :
        res.status(201).json(createNewUser({ name, age, id: getRandomId() }));

}