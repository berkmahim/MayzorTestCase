import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const authenticateToken = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

        if (token){
            jwt.verify(token, process.env.JWT_SECRET, (err) => {
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

export { authenticateToken }