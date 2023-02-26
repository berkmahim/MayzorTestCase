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

const addToFavorites = async (req, res) => {
    try{
        console.log(user)
        if(user.favorites.includes(req.body.id)){
            res.status(200).json({
                "message": "product already in favorites"
            })
        }
        else{
            await user.favorites.push(req.body.id)
            user.save()
            res.status(200).json({
                "message": "product added to favorites"
            })
        }

    }catch (error){
        res.status(400).json({
            status: "error",
            error
        })
    }
}

const removeFromFavorites = async (req, res) => {
    try{
        if(user.favorites.includes(req.body.id)){
            console.log(user)
            await user.favorites.remove(req.body.id)
            user.save()
            res.status(200).json({
                "message": "product removed from favorites"
            })
        }
        else{
            res.status(200).json({
                "message": "this product not in your favorites"
            })
        }
    }catch (error){
        res.status(400).json({
            status: "error",
            error
        })
    }
}




export {createProduct, getAllProducts, addToFavorites, removeFromFavorites}