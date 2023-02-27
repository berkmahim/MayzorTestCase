import jwt from 'jsonwebtoken'
import User from "../models/User.js";

global.user = null
const checkUser = async (req, res, next) => {
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token, "mayzor_jw5tto7ken_secret57key", async (err, decodedToken) => {
            if(err){
                console.log(err.message)
                res.locals.user = null
                next()
            }
            else {
                const founduser = await User.findById(decodedToken.userId)
                //console.log(user)
                res.locals.user = user
                user = founduser
                next()
            }
        })
    }
    else{
        res.locals.user = null
        next()
    }
}


const authenticateToken = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

        if (token){
            jwt.verify(token, "mayzor_jw5tto7ken_secret57key", (err) => {
                if(err){
                    console.log(err.message)
                    res.send.json({
                        "message": "something went wrong"
                    })
                }
                else next()
            })
        }
        else  res.send.json({
            "message": "no token available"
        })




    } catch (error) {
        res.status(401).json({
            succeeded: false,
            error: 'Not authorized',
        });
    }
};

export { authenticateToken, checkUser }