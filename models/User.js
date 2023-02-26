import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const { Schema } = mongoose;

const UserSchema = new Schema({
        name:{
            type: String,
            required: true
        },
        surname:{
            type: String,
            required: true
        },
        email:{
            type: String,
            unique: true,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        phnNumber:{
            type: String,
            unique: true
        },
        favorites:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }]
    },
    {
        timestamps: true
    }
);

UserSchema.pre('save', function (next){
    const user = this
    bcrypt.hash(user.password, 10 , (err, hash) => {
        user.password = hash
        next()
    })
})

const User = mongoose.model('User', UserSchema)
export default User