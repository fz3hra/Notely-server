const Todo = require("../../models/todo");

async function getTodo_controller(req, res)  {
    const todos = await Todo.find()
    res.send(todos);
}

module.exports = {getTodo_controller};