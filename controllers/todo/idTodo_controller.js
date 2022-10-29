const Todo = require("../../models/todo");

async function idTodo_controller(req, res){
    try {
        const idTodo = await Todo.findOne({_id:  req.params.id});
        res.send(idTodo);
    }
    catch{
        res.status(400);
        res.send({error: "Post does not exist"});
    }
}

module.exports = {idTodo_controller};