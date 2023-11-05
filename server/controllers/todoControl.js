import {Item} from "../models/todoSchema.js"

const date = new Date().toDateString()

export const weekdayTodo = async (req, res) => {
    const weekday = await Item.find({type: 'weekday'}).exec()
    try {
        res.render('index.ejs', {
            today: date,
            weekday_todo: weekday,
            title: 'Weekday'
        })
    } catch (err) {
        console.log(err)
    }
}

export const weekendTodo = async (req, res) => {
    const weekend = await Item.find({type: 'weekend'}).exec()
    try {
        res.render('index.ejs', {
            today: date,
            weekday_todo: weekend,
            title: 'Weekend'
        })
    } catch (err) {
        console.log(err)
    }
}

export const submitTodo = async (req, res) => {
    const todoList = await Item.find({}).exec()
    const lastid = todoList.length === 0 ? 0 : todoList[todoList.length - 1].id
    const newTodo = new Item({
        id: lastid + 1,
        todo: req.body.todo,
        type: req.body.choice,
        status: true
    })

    try {
        await Item.insertMany([newTodo])
    } catch (err) {
        console.log(err)
    }

    req.body.choice === 'weekday'? res.redirect('/') : res.redirect('/weekend')
}

export const deleteTodo = async (req, res) => {
    const checkboxId = req.body.checkbox
    const dayType = await Item.find({id: checkboxId}).exec()
    await Item.findOneAndDelete({id: checkboxId}).exec()
    if (dayType.type === 'weekday') {
        res.redirect('/')
    } else {
        res.redirect('/weekend')
    }
    
}