import { Router } from 'express';
import { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin } from '../middlewares/verifyToken.js';
import { saveOrder,updateOrder,deleteById,getById,getAll} from '../controllers/orders.controller.js';

const router = Router()

router.get("/", verifyTokenAndAdmin, getAll);
router.post("/save", verifyToken,saveOrder);
router.put("/:id", verifyTokenAndAdmin,updateOrder);
router.get("/find/:userId", verifyTokenAndAuthorization, getById);
router.delete("/:id", verifyTokenAndAdmin,deleteById);

export default router;