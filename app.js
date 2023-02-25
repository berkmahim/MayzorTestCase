import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT
app.use('/', (req, res) => {
    res.json({
        "message": "server started"
    })
})

app.listen(port, () => {
    console.log(`app started at port ${port}`)
})