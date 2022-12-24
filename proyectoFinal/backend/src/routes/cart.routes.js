import { Router } from 'express';
import { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin } from '../middlewares/verifyToken.js';
import { getAll, getById, saveCart, updateCart,postProductToCart, deleteById, deleteAll } from '../controllers/carts.controller.js';

const router = Router()

router.get('/',verifyTokenAndAdmin, getAll)
router.get('/:id',verifyTokenAndAuthorization, getById)
router.post('/',verifyToken, saveCart)
router.put('/:id',verifyToken, updateCart)
router.post('/:id/productos',verifyToken, postProductToCart)
router.delete('/:id',verifyTokenAndAuthorization, deleteById)
router.delete('/',verifyTokenAndAdmin, deleteAll)

export default router;