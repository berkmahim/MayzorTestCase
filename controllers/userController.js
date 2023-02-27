import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(201).send('user created')

    }catch (error){
        res.status(500).send(error)
    }
}
const loginUser = async (req, res) => {
    try{
        const {userData, password} = req.body
        let userReq = await User.findOne({phnNumber: userData})
        console.log(userReq)

        if (userReq == null){
           // console.log('ife girdim')
            const user1 = await User.findOne({email: userData})
            // console.log(user)
            userReq = user1
        }


        let same = false
        console.log(userReq)
        if(userReq){
            // console.log("i'm in if")
            same = await bcrypt.compare(password, userReq.password)
            //console.log("comparing password")
            // console.log(same)

        }
        else{
            // console.log("i'm in else")

            return res.status(401).json({
                succeded: false,
                error: 'user not found'
            })
        }
        if (same){

            const token = createToken(userReq._id)
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24
            })
            res.status(200).json({
                userReq,
                message: "you are logged in"
            })
        }
        else{
            res.status(401).json({
                succeded: false,
                error: 'username or password not matched'
            })
        }
    }catch (error){
        res.status(500).send(error)
    }
}

const createToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}

const logout = (req, res) => {
    res.cookie('jwt', '', {
        maxAge: 1,
    })
    res.status(200).json({
        "message": "you are logged out"
    })
}



export {createUser, loginUser, logout}