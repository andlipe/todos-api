const Todo = require('../models/Todo')

module.exports = {
    async index(request, response) {
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
    },

    async delete(request, response) {
        await Todo.deleteOne({ _id: request.params }, (err) => {
            if(!err){
                response.json({ "exclude" : "yes" })
            }
            else {
                return err
            }
        })

    }

}