import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

const PORT = 3000
const app = express()

//middleware
app.use(morgan('short'), bodyParser.urlencoded({extended: true}), bodyParser.json())
app.use(express.static('styles'))
const date = new Date().toDateString()

app.get('/', (req, res) => {
    res.render('index.ejs', {today: date})
})

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})
