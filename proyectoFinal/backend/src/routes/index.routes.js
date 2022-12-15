import { Router } from 'express';
import productsRoute from './product.routes.js' 
import cartRoute from './cart.routes.js' 
import authRoute from './auth.routes.js' 
import userRoute from './user.routes.js' 

const router = Router()

router.use('/api/productos', productsRoute)
router.use('/api/cart', cartRoute)
router.use('/api/auth', authRoute);
// app.use('/api/user', userRoute);

export default router;