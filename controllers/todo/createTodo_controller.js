const Todo = require("../../models/todo");

async function todo_Controller (req, res) {
    try {
        const {title, description} = req.body;
        var createTodo = new Todo({
        title,
        description
    });
    createTodo = await createTodo.save()
    res.send(createTodo);
    res.json(createTodo);
    }
    catch(e){
        res.status(500).json({error: e.message});
    }
}

module.exports = {todo_Controller};