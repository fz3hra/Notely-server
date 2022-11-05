const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const todoSchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
    },
    description: {
        required: false,
        type: String,
    },
    user_id: {
        type: Schema.Types.ObjectId, ref: 'User',
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;