import { Router } from 'express';
import productsRoute from './product.routes.js' 
import cartRoute from './cart.routes.js' 
import authRoute from './auth.routes.js' 
import userRoute from './user.routes.js' 
import orderRoute from './order.routes.js'
import msgRoute from './message.routes.js'
// import chatRoute from './chat.routes.js'

const router = Router()

router.use('/api/products', productsRoute)
router.use('/api/cart', cartRoute)
router.use('/api/auth', authRoute);
router.use('/api/user', userRoute);
router.use('/api/order', orderRoute);
router.use('/api/messages', msgRoute);
// router.use('/api/chat', chatRoute);

export default router;