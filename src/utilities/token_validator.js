const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const token = req.header('x-token');
    try {
        jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token is not valid.' });
    }
}

module.exports = validateToken;