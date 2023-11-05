import express from 'express'
import {weekdayTodo, weekendTodo, submitTodo, deleteTodo} from '../controllers/todoControl.js'

const router = express.Router()

router.get('/', weekdayTodo)
router.get('/weekend', weekendTodo)
router.post('/submit', submitTodo)
router.post('/delete', deleteTodo)

export default router