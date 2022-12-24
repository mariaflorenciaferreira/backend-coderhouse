import { Router } from 'express';
import { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin } from '../middlewares/verifyToken.js';
import { getAll, getById,getByCategory, saveProduct, updateProduct, deleteById, deleteAll } from '../controllers/products.controller.js';

const router = Router()

router.get('/', getAll)
router.get('/:id', getById)
router.get('/categories/:category', getByCategory)
router.post('/',verifyTokenAndAdmin, saveProduct)
router.put('/:id',verifyTokenAndAdmin, updateProduct)
router.delete('/:id',verifyTokenAndAdmin, deleteById)
router.delete('/',verifyTokenAndAdmin, deleteAll)

export default router;