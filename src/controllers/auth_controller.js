/**
 * Modules
 */
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utilities');
/**
 * Controllers
 */

/**
 * @param {Request} req 
 * @param {Response} res 
 */
const login = async (req, res) => {
    try {
        //Get the login data
        const { email, password } = req.body;
        //Do validations with the database
        console.log('Call the Database to run validations');
        if (bcrypt.compareSync(password, '$2a$10$X5BrwJRySe.W3B7xDi3xDOV7qHs25rmw8Z9.ZiVqS7OPLJP9oeL9O')) {
            //If password is correct
            console.log('Auth data is correct.');
            const token = await generateToken('someid');
            res.status(200).json({ token, message: 'User logged successfully.' });
        } else {
            //If password is not correct
            res.status(400).json({ message: 'Bad Login.'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error, please contact the administrator.' });
    }
}

module.exports = {
    login,
}