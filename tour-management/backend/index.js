import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tours.js'

dotenv.config()
const port = process.env.PORT || 8000

const app = express()

// connect to database
const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('mongoose database connected')
        
    } catch (err) {

        console.log('mongoose database connection failed')

    }
}

// middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/tours', tourRoute)


app.listen(port, () => {
    connect()
    console.log('server listening on port', port)
})
