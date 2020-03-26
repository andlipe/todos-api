const Todo = require('../models/Todo')

module.exports = {
    async index(require, response) {
        const todos = await Todo.find()
    
        return response.json(todos)
    },

    async store(request, response){
        let { description } = request.body;
        let completed = false;
    
        let { createdAt, updatedAt } = Date.now()
    
        let todo = await Todo.create({
            description, 
            completed, 
            createdAt, 
            updatedAt,
        })
       return response.json(todo)
    }
}