import mongoose from 'mongoose'
const itemSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    todo: {
        type: {},
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
})

export const Item = mongoose.model('Item', itemSchema)