import mongoose from 'mongoose'

const { Schema } = mongoose;

const CommentSchema = new Schema({
        comment:{
            type: String,
            required: true
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
    },
    {
        timestamps: true
    }
);



const Comment = mongoose.model('Comment', CommentSchema)
export default Comment