const Todo = require("../../models/todo");

// TODO: create todo under a specific user
// when create todo, retrieve user id then pass it as foreign key id

async function todo_Controller (req, res) {
    try {
        const {title, description, user_id} = req.body;
        var createTodo = new Todo({
        title,
        description,
        user_id
    });
    createTodo = await createTodo.save()
    res.send(createTodo);
    }
    catch(e){
        res.status(500).json({error: e.message});
    }
}

module.exports = {todo_Controller};