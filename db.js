import mongoose from 'mongoose'
mongoose.set('strictQuery',false)
const conn = () =>{
    mongoose.connect(process.env.DB_URI, {
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