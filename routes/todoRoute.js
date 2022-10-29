const express = require('express');
const todo_Controller = require("../controllers/todo/createTodo_controller");
const getTodo_controller = require("../controllers/todo/getTodo_controller");
const idTodo_controller = require("../controllers/todo/idTodo_controller");
const updateTodo_controller = require("../controllers/todo/updateTodo_controller");
const deleteTodo_controller = require("../controllers/todo/deleteTodo_controller");

const todoRouter = express.Router();

todoRouter.get('/api/get-todos', getTodo_controller.getTodo_controller);

todoRouter.post('/api/createTodo', todo_Controller.todo_Controller);

todoRouter.get('/api/get-todos/:id', idTodo_controller.idTodo_controller);

todoRouter.patch('/api/get-todos/:id', updateTodo_controller.updateTodo_controller);

todoRouter.delete('/api/get-todos/:id', deleteTodo_controller.deleteTodo_controller);

module.exports = todoRouter;