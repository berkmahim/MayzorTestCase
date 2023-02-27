import {Router} from 'express'
import * as pageController from '../controllers/pageController.js'


const router = Router()


router.route('/').get(pageController.getIndex)




export default router