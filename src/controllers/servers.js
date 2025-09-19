import { findAllUsers, findUserById } from "../utils.js";

export const getAllUsers = (req, res) => {
    res.json(findAllUsers());
}

export const getUserById = (req, res) => {
    const id = req.params.id;
    const user = findUserById(id);

    !user? 
        res.status(404).json({ error: true, errorText: 'User not found' }) :
        res.json(findAllUsers());
}


export const createUser = (req, res) => {
    
}