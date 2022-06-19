/**
 * Modules and functions
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers, getUserById, postUser, putUser, deleteUser } = require('../controllers/users_controller');
const { validateFields } = require('../middlewares');
const { validateId, validateToken } = require('../utilities');
const router = Router();
/**
 * Routing configurations
 */
router.route('/')
    .get([
        validateToken,
    ], getUsers)
    .post([
        validateToken,
        check('name', 'User name is required.').not().isEmpty(),
        check('email', 'User e-mail is not valid.').isEmail(),
        check('password', 'User passsword needs to be 6 letters minimum.').isLength({ min: 6, }),
        validateFields
    ], postUser);
router.route('/:id')
    .get([ 
        validateToken,
        check('id').custom(validateId),
        validateFields
    ], getUserById)
    .put([
        validateToken,
        check('id').custom(validateId),
        validateFields
    ], putUser)
    .delete([
        validateToken,
        check('id').custom(validateId),
        validateFields
    ], deleteUser);
/**
 * Exportation
 */
module.exports = router;