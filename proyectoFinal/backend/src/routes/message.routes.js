import { Router } from 'express';
import { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin } from '../middlewares/verifyToken.js';
import {getAll,getById,saveMsg,deleteAll,deleteById} from '../controllers/messages.controller.js';

const router = Router()

router.get("/", verifyTokenAndAdmin, getAll);
router.post("/save", verifyToken,saveMsg);
router.get("/find/:userId", verifyTokenAndAuthorization, getById);
router.delete("/:id", verifyTokenAndAdmin,deleteById);
router.delete("/", verifyTokenAndAdmin,deleteAll);

export default router;