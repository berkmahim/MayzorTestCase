import {Router} from 'express'
import * as productController from "../controllers/productController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js";


const router = Router()

router.route('/').post(productController.createProduct)
router.route('/').get(productController.getAllProducts)
router.route('/addToFavorites').post(authMiddleware.authenticateToken, authMiddleware.checkUser ,productController.addToFavorites)
router.route('/removeFromFavorites').post(authMiddleware.authenticateToken, authMiddleware.checkUser ,productController.removeFromFavorites)
router.route('/showFavorites').get(authMiddleware.authenticateToken, authMiddleware.checkUser ,productController.showFavorites)

export default router