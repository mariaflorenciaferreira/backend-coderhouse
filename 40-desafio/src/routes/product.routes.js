import { Router } from 'express';
import { getAll, getById, saveProduct, updateProduct, deleteById, deleteAll } from '../controllers/products.controller.js';

const router = Router()

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', saveProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteById)
router.delete('/', deleteAll)

export default router;