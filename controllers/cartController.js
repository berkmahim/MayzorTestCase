
const addToCart = async (req, res) => {
    try{
        console.log(user)
        if(user.cart.includes(req.body.id)){
            res.status(200).json({
                "message": "product already in cart"
            })
        }
        else{
            await user.cart.push(req.body.id)
            user.save()
            res.status(200).json({
                "message": "product added to cart"
            })
        }

    }catch (error){
        res.status(400).json({
            status: "error",
            error
        })
    }
}

const removeFromCart = async (req, res) => {
    try{
        if(user.cart.includes(req.body.id)){
            console.log(user)
            await user.cart.remove(req.body.id)
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

const showCart = async (req, res) => {
    try{
        let cart = []
        for (let item of user.cart) {
            item = item.toString()
            let product = await Product.findById(item)
            cart.push({
                "name": product.name,
                "id": product._id
            })
        }
        res.status(200).send(
            cart
        )
    }catch (error){
        res.status(400).json({
            status: "error",
            error
        })
    }

}
const makeOrder = async (req, res) => {
    try{
           await user.cart.forEach( async (item) =>{
              await  user.purchased.push(item)
               user.cart.remove(item)
            })
            user.save()
            res.status(200).json({
                "message": "we got your order"
            })

    }catch (error){
        res.status(400).json({
            status: "error",
            error
        })
    }
}




export {addToCart, showCart, removeFromCart, makeOrder}