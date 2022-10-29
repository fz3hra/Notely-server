const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    description: {
        required: false,
        type: String,
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;