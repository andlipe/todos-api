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
        let { _id } = request.params;
        await Todo.deleteOne({ _id }, (err) => {
            if(!err){
                response.json({ })
            }
            else {
                return err
            }
        })

    },

    async modify(request, response) {
            let updateObject = request.body;
            let { _id } = request.params;
            await Todo.updateOne({ _id }, {$set: updateObject});
            return response.json({})
        },

    async update(request, response) {
        await Todo.findOneAndUpdate(request.params, request.body, { new: true }, (err, todo) => {
            if (err) return response.status(404).send(err);
            return response.send(todo);
        })
    }    
    }
