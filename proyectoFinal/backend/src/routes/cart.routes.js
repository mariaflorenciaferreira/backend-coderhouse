import { Router } from 'express';
import { getAll, getById, saveCart, updateCart,postProductToCart, deleteById, deleteAll } from '../controllers/carts.controller.js';

const router = Router()

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', saveCart)
router.put('/:id', updateCart)
router.post('/:id/productos', postProductToCart)
router.delete('/:id', deleteById)
router.delete('/', deleteAll)

export default router;