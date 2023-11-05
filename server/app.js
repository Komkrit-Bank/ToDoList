import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'

import {default as todoRoute} from './routes/fileRoute.js'

const PORT = 4000
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/todolistDB',
    {
        useNewUrlParser: true
    }).then(()=> console.log('Connenct to Database complete!!!'))
    .catch((err)=> console.log(err))

//middleware
app.use(morgan('short'), bodyParser.urlencoded({extended: true}), bodyParser.json())
app.use(express.static('styles'))


//route
app.use('/', todoRoute)

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`))