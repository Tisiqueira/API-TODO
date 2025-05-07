const { Router }= require('express');

const TaskController = require('../controller/taskController');
const validateTaskId = require('../middlewares/validateTaskId');

const routes = Router();

routes.get('/tasks',TaskController.index);
routes.post('/tasks', TaskController.store);
routes.delete('/tasks/:id', validateTaskId, TaskController.delete);
routes.put('/tasks/:id', validateTaskId, TaskController.update)

module.exports = routes;
