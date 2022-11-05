const Todo = require("../../models/todo");

async function getTodoByUser_controller(req, res)  {
    const userTodo = await Todo.find({user_id: req.params.user_id})
    res.send(userTodo);
}

module.exports = {getTodoByUser_controller};