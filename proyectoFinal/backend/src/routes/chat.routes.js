import {Router} from 'express' 
import { getAll, getById, saveChat, updateChat, deleteById } from '../controllers/chat.controller.js';
import { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin } from '../middlewares/verifyToken.js';

const router = Router()

router.get('/', getAll)
router.get('/:id', getById)
router.post('/',verifyTokenAndAdmin, saveChat)
router.put('/:id',verifyTokenAndAdmin, updateChat)
router.delete('/:id',verifyTokenAndAdmin, deleteById)


export default router;