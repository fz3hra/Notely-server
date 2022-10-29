const Todo = require("../../models/todo");

async function updateTodo_controller(req, res){
    try {
        const idTodo = await Todo.findOne({_id:  req.params.id});

        if(req.body.title)
        {
            idTodo.title = req.body.title;
        }

        if(req.body.description)
        {
            idTodo.description = req.body.description;
        }

        await idTodo.save();
        res.send(idTodo);
    }
    catch{
        res.status(400);
        res.send({error: "Post does not exist"});
    }
}

module.exports = {updateTodo_controller};