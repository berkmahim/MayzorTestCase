import {Router} from 'express'
import * as userController from "../controllers/userController.js";


const router = Router()

router.route('/register').post(userController.createUser)
router.route('/login').post(userController.loginUser)
router.route('/logout').get(userController.logout)

export default router