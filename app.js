import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import {checkUser} from './middlewares/authMiddleware.js'
import userRoute from "./routes/userRoute.js"
import productRoute from "./routes/productRoute.js"
import cartRoute from "./routes/cartRoute.js"
import commentRoute from "./routes/commentRoute.js"
import pageRoute from "./routes/pageRoute.js"
import conn from "./db.js";
import mongoose from "mongoose"
mongoose.set('strictQuery', false)


dotenv.config()

const port = process.env.PORT
const app = express()
conn()
//mongoose.connect('mongodb://localhost/mayzor-testCase-db')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())




app.get('*',checkUser)
app.use('/users',userRoute)
app.use('/products',productRoute)
app.use('/cart',cartRoute)
app.use('/comment',commentRoute)
app.use('/',pageRoute)




app.listen(port, () => {
    console.log(`app started at port ${port}`)
})