const { Router } = require('express')
const routes = Router()
const TodoController = require('./controllers/TodoController')
const Todo = require('./models/Todo')

routes.post('/todos',  TodoController.store)
routes.get('/todos', TodoController.index)
routes.delete('/todos/:_id', TodoController.delete) 
routes.patch('/todos/:_id', TodoController.modify)
routes.put('/todos/:_id', TodoController.update)

module.exports = routes;