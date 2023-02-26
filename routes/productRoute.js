import {Router} from 'express'
import * as productController from "../controllers/productController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js";


const router = Router()

router.route('/').post(productController.createProduct)
router.route('/').get(authMiddleware.authenticateToken, productController.getAllProducts)

export default router