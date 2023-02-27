import {Router} from 'express'
import * as cartController from "../controllers/cartController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js";
import * as productController from "../controllers/productController.js";


const router = Router()


router.route('/addToCart').post(authMiddleware.authenticateToken, authMiddleware.checkUser ,cartController.addToCart)
router.route('/showCart').get(authMiddleware.authenticateToken, authMiddleware.checkUser ,cartController.showCart)
router.route('/removeFromCart').post(authMiddleware.authenticateToken, authMiddleware.checkUser ,cartController.removeFromCart)
router.route('/makeOrder').post(authMiddleware.authenticateToken, authMiddleware.checkUser ,cartController.makeOrder)




export default router