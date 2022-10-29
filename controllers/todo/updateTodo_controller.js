const Todo = require("../../models/todo");

async function updateTodo_controller(req, res){
    try {
        const updateTodo = await Todo.findOne({_id:  req.params.id});

        if(req.body.title)
        {
            updateTodo.title = req.body.title;
        }

        if(req.body.description)
        {
            updateTodo.description = req.body.description;
        }

        await updateTodo.save();
        res.send(updateTodo);
    }
    catch{
        res.status(400);
        res.send({error: "Post does not exist"});
    }
}

module.exports = {updateTodo_controller};