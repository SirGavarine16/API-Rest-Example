/**
 * Modules and external functions.
 */
const bcrypt = require('bcryptjs');
const { request, response } = require('express');
const { users } = require('../constants');
/**
 * Controllers
 */

const getUsers = (req = request, res = response) => {
    try {
        //Getting the data.
        console.log('Call to database to get the users');
        //Response.
        res.status(200).json({ results: users });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error, please contact the administrator.' });
    }
}

const getUserById = (req = request, res = response) => {
    try {
        //Getting the id.
        const id = parseInt(req.params.id);
        //Getting the data.
        console.log('Call to database to get the user by id.');
        const user = users.filter((_user) => _user.id === id)[0];
        //Response.
        if (user) {
            res.status(200).json({ result: user });
        } else {
            res.status(400).json({ message: `User with id ${id} does not exist in database.` });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error, please contact the administrator.' });
    }
}

const postUser = (req = request, res = response) => {
    try {
        //Getting the data from the body.
        const { email, password, name } = req.body;
        //Generation of password hash and maybe other stuff.
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);
        //Saving the new user.
        console.log('Call to database to create and save user.');
        //Response.
        res.status(201).json({ userData: { email, password: hash, name }, message: 'User created successfully.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error, please contact the administrator.' });
    }
}

const putUser = (req = request, res = response) => {
    try {
        //Getting the id.
        const id = parseInt(req.params.id);
        //Get the old user data.
        console.log('Call to database to get current user data by id.');
        //Getting the data from the body assigning the old data as default and other stuff
        const { email = 'Old e-mail', password = 'Old password', name = 'Old name' } = req.body;
        //Updating the user.
        console.log('Call to database to update user by id.');
        //Response.
        res.status(200).json({ userData: { email, password, name }, message: `User with id ${id} updated successfully.` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error, please contact the administrator.' });
    }
}

const deleteUser = (req = request, res = response) => {
    try {
        //Getting the id.
        const id = parseInt(req.params.id);
        //Getting the data.
        console.log('Call to database to delete the user by id.');
        const user = users.filter((_user) => _user.id === id)[0];
        //Response.
        if (user) {
            res.status(200).json({ message: `User with id ${id} deleted successfully.` });
        } else {
            res.status(400).json({ message: `User with id ${id} does not exist in database.` });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error, please contact the administrator.' });
    }
}

module.exports = {
    getUsers,
    getUserById,
    postUser,
    putUser,
    deleteUser,
}