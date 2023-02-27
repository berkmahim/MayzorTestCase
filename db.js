import mongoose from 'mongoose'
mongoose.set('strictQuery',false)
const conn = () =>{
    mongoose.connect("mongodb+srv://berkmahim620:XrPm34BREZm6XHv2@cluster0.3ro9qbb.mongodb.net/?retryWrites=true&w=majority", {
        dbName: 'mayzor',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('connected to db successfuly')
        })
        .catch((err)=>{
            console.log(`db connection err: ${err}`)
        })
}

export default conn