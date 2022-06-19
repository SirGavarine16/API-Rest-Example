const jwt = require('jsonwebtoken');

const generateToken = (data) => {
    return new Promise((resolve, reject) => {
        const payload = { data: 'somedata', id: data };
        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '12h',
        }, (error, token) => {
            if (error) {
                reject(`Token could not be generated.`);
            } else {
                resolve(token);
            }
        })
    });
}

module.exports = generateToken;