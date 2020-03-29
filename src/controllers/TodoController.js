const Todo = require('../models/Todo')

module.exports = {

    async index(request, response) {
        const { page = 1} = request.query
        /* Verificar se na requisição foi enviada alguma query, se não retorna todos Todos */
        if(Object.keys(request.query).length === 0){
            const todos = await Todo.find({})
            return response.json(todos)
        
        } 
        /* Caso tenha sido enviado o page na query ele trás a paginação */
            let paginate = 5
            const todos = await Todo.find({})
                .skip((page - 1)*paginate)
                .limit(5)
                .sort('_id')
    
        return response.json(todos)
        },
          

    async store(request, response){
        let { description, completed } = request.body;
        let { createdAt, updatedAt } = Date.now()
    
        let todo = await Todo.create({
            description, 
            completed, 
            createdAt, 
            updatedAt,
        }, (err, todo) => {
            if(err) return response.status(400).send(err);  
            return response.status(201).json(todo)
        })
           
    },

    async delete(request, response) {
        let { _id } = request.params;
        await Todo.deleteOne({ _id }, (err) => {
            if(err) {
                return response.status(404).send(err)
            }
            return response.status(204).send({})
        })

    },

    async modify(request, response) {
            let updateObject = (request.body);
            let { _id } = request.params;
            await Todo.updateOne({ _id }, {$set: updateObject}, (err) => {
              if(err) return response.status(404).send(err);  
            });
            return response.status(204).send({})
        },

    async update(request, response) {
        await Todo.findOneAndUpdate(request.params, request.body, { new: true }, (err, todo) => {
            if (err) {
                return response.status(404).send(err);
            }
            return response.status(204).send({})
        })
    }    
    }
