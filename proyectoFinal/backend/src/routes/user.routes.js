import { Router } from 'express';
import { getAll, getById, saveUser, updateUser, deleteById, deleteAll } from '../controllers/users.controller.js';
import { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin } from '../middlewares/verifyToken.js';


const router = Router()

router.get('/',verifyTokenAndAdmin, getAll)
router.get('/:id',verifyTokenAndAdmin, getById)
router.delete("/:id", verifyTokenAndAuthorization, deleteById);


export default router;