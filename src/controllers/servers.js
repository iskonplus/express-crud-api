import { findAllUsers, findUserById, isUserDataValid, getUserIndex, getRandomId, deleteCurrentUser } from "../utils.js";
import { users } from "../db.js";
import { errorResponse } from "./response.js";

export const getAllUsers = (_, res) => {
    res.json(findAllUsers());
}

export const getUserById = (req, res) => {
    const id = req.params.id;
    const user = findUserById(id);

    !user ?
        res.status(404).json(errorResponse('User not found')) :
        res.json(user);
}


export const createUser = (req, res) => {
    const { name, age } = req.body || {};

    if (!isUserDataValid(name, age)) {
        return res.status(400).json(errorResponse('Missing or invalid required fields'));
    }

    const newUser = { name, age, id: getRandomId() };
    users.push(newUser);

    return res.status(201).json(newUser);
}

export const updateUser = (req, res) => {
    const id = req.params.id
    const userIndex = getUserIndex(id);

    if (userIndex === -1) {
        return res.status(404).json(errorResponse('User not found'));
    }

    const { name, age } = req.body || {};

    if (!isUserDataValid(name, age)) {
        return res.status(400).json(errorResponse('Missing or invalid required fields'));
    }

    const updatedUserData = { name, age, id };
    users[userIndex] = updatedUserData;

    return res.status(200).json(updatedUserData);
}

export const deleteUser = (req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex(user => user.id === userId);

    if (!users[userIndex]) {
        return res.status(404).json(errorResponse('User not found'));
    }

    deleteCurrentUser(userIndex);
    return res.status(204).send();
}


export const logIn = (req, res) => {
    const { nickName, password } = req.body || {};
    console.log({ nickName, password });

    if (!nickName || !password) return res.status(400).json(errorResponse('Name and password are required'));

    const authUser = users.find(user => user.name === nickName && user.password === password);

    if (!authUser) return res.status(400).json(errorResponse('Invalid credentials'));

    const okResponse = {
        success: true,
        token: `fake-token-${authUser.id}`,
        user: { id: authUser.id, name: authUser.name }
    }

    return res.json(okResponse);

}