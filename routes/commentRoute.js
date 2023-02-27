import {Router} from 'express'
import * as commentController from "../controllers/commentController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js";


const router = Router()


router.route('/addComment').post(authMiddleware.authenticateToken, authMiddleware.checkUser ,commentController.addComment)




export default router