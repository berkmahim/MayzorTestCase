import mongoose from 'mongoose'
import slugify from 'slugify'

const { Schema } = mongoose;

const ProductSchema = new Schema({
        name:{
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    },

);

ProductSchema.pre('validate', function (next){
    this.slug = slugify(this.name, {
        lower: true,
        strict: true
    })
    next()
})


const Product = mongoose.model('Product', ProductSchema)
export default Product