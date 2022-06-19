/**
 * Modules
 */
const express = require('express');
const cors = require('cors');
/**
 * App creation and settings
 */
const app = express();
app.set('port', process.env.PORT);
/**
 * Middlewares
 */
app.use(cors());
app.use(express.json());
/**
 * Public dir
 */
app.use(express.static('./src/public'));
/**
 * Routing
 */
app.use('/api/users', require('./src/routes/users.js'));
app.use('/api/auth', require('./src/routes/auth.js'));
/**
 * Export 
 */
module.exports = app;