const Router = require('express').Router;
const { authMiddleware } = require('../middlewares/middlewares');
const loginRoute = require('./login.routes');
const signUpRoute = require('./signup.routes');
const logoutRoute = require('./logout.routes');
const getHome = require('../controllers/user.controllers/homeController');

const router = Router();

router.get('/', authMiddleware, getHome);

router.use('/login', loginRoute);
router.use('/signup', signUpRoute);
router.use('/logout', logoutRoute);

//404
router.get('/signup-error', (req, res) => {
    res.render('signuperror');
});

router.get('/login-error', (req, res) => {
    res.render('loginError');
});

module.exports = router;
