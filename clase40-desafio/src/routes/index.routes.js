import { Router } from 'express';
import productsRoute from './product.routes.js' 

const router = Router()

router.use('/api/prods', productsRoute)

export default router;