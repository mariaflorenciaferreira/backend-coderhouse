import { Router } from 'express';
import productsRoute from './product.routes.js' 
import cartRoute from './cart.routes.js' 

const router = Router()

router.use('/api/productos', productsRoute)
router.use('/api/cart', cartRoute)

export default router;