const Router = require('express').Router;
const { authMiddleware } = require('../middlewares/middlewares');

const loginRouter = require('./login.routes');
const signUpRouter = require('./signup.routes');
const logoutRouter = require('./logout.routes');
const infoRouter=require('./info.routes')
const randomRouter=require('./random.routes')
const carritoRouter=require('./carrito.routes')
const productosRouter=require('./producto.routes')

const {getHome} = require('../controllers/user.controllers/homeController');

const router = Router();

router.get('/', authMiddleware, getHome)
.use('/login', loginRouter)
.use('/signup', signUpRouter)
.use('/logout', logoutRouter)
.use('/info', infoRouter)
.use('/random', randomRouter)
.use('/api/productos',productosRouter)
.use('/api/carritos',carritoRouter)


//404
router.get('/signup-error', (req, res) => {
    res.render('signuperror');
});

router.get('/login-error', (req, res) => {
    res.render('loginError');
});

module.exports = router;
