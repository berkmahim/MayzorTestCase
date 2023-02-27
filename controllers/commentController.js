import Product from "../models/Product.js";
import Comment from "../models/Comment.js";
import comment from "../models/Comment.js";


const addComment = async (req, res) => {
    try{
        if (user.purchased.includes(req.body.product)){
            const comment = await Comment.findOne({
                product: req.body.product,
                user: user
            })
            console.log(comment)
            if (comment){
                res.status(400).json({
                    "message":"you already added comment on this product",

                })
            }
            else{
                const comment = await Comment.create({
                    comment: req.body.comment,
                    product: req.body.product,
                    user: user._id
                })
                res.status(201).json({
                    "message": "your comment sended"
                })
            }

        }
        else{
            res.status(400).json({
                "message":"buy product to add comment"
            })
        }
    }catch (error){
        res.status(400).json({
            status: "error",
            error
        })
    }
}

export {addComment}