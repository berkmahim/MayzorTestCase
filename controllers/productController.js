import Product from '../models/Product.js'
import * as authMiddleware from '../middlewares/authMiddleware.js'

const createProduct = async (req, res) =>{
    try {
        const product = await Product.create(req.body)
        res.status(201).json({
            "succeded": "true",
            "message": "product created"
        })
        // res.send('kurs olusturuldu')
    }catch (error) {
        res.status(400).json({
            status: 'error',
            error
        })
    }}
const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({})
        res.status(200).json({
            products,
            user
        })
    }catch (error){
        res.status(500).json({
            error
        })
    }
}

export {createProduct, getAllProducts}