/**
 * Modules and functions
 */
const { Router } = require('express');
const { login } = require('../controllers/auth_controller');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares');
const router = Router();
/**
 * Routing configurations
 */
router.route('/login')
    .post([
        check('email', 'User e-mail is not valid.').isEmail(),
        check('password', 'User passsword needs to be 6 letters minimum.').isLength({ min: 6, }),
        validateFields
    ], login);
/**
 * Exportation
 */
module.exports = router;