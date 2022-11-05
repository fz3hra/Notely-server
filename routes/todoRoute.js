const express = require('express');
const todo_Controller = require("../controllers/todo/createTodo_controller");
const getTodo_controller = require("../controllers/todo/getTodo_controller");
const idTodo_controller = require("../controllers/todo/idTodo_controller");
const updateTodo_controller = require("../controllers/todo/updateTodo_controller");
const deleteTodo_controller = require("../controllers/todo/deleteTodo_controller");
const signIn_callback = require("../controllers/signIn_controller");

const getTodoByUser_controller = require("../controllers/todo/getTodo_byUser_controller");


const todoRouter = express.Router();

/** get list of todos - all users */
todoRouter.get('/api/get-todos', signIn_callback.verifyToken, getTodo_controller.getTodo_controller);

/** get list of todos - unique user */
todoRouter.get('/api/get-todos/:user_id', signIn_callback.verifyToken, getTodoByUser_controller.getTodoByUser_controller);

/** create todos*/
todoRouter.post('/api/createTodo', signIn_callback.verifyToken, todo_Controller.todo_Controller);

/** get todo by ids of todo*/
todoRouter.get('/api/get-todos/:id', idTodo_controller.idTodo_controller);

/** update todo by ids of todo*/
todoRouter.patch('/api/get-todos/:id', updateTodo_controller.updateTodo_controller);

/** delete todo by ids of todo*/
todoRouter.delete('/api/get-todos/:id', deleteTodo_controller.deleteTodo_controller);

module.exports = todoRouter;