const Todo = require("../../models/todo");

async function deleteTodo_controller(req, res){
    try {
        const deleteTodo = await Todo.deleteOne({_id:  req.params.id});

        res.status(204).send(deleteTodo);
    }
    catch{
        res.status(400);
        res.send({error: "Post does not exist"});
    }
}

module.exports = {deleteTodo_controller};