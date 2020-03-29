const { Router } = require('express')
const routes = Router()
const TodoController = require('./controllers/TodoController')
const { celebrate, Segments, Joi } = require('celebrate')
const Todo = require('./models/Todo')


routes.get('/todos', celebrate({
    /* Validação feita pelo celebrate, para verificar se a query enviada é a "page" no formato number */
    [Segments.QUERY]: Joi.object().keys({
             page: Joi.number()
    })
}), TodoController.index)

routes.post('/todos',celebrate({
    /* Validação feita pelo celebrate, para verificar se foram enviados os campos necessário no body */
    [Segments.BODY]: Joi.object().keys({
        description: Joi.string().required().min(3),
        completed: Joi.boolean().default(false)
    })
}) , TodoController.store)

routes.delete('/todos/:_id', celebrate({
    /* Validação feita pelo celebrate, para verificar se o id foi enviado na requisição */
    [Segments.PARAMS]: Joi.object().keys({
        _id: Joi.string().required(),
    })
}),TodoController.delete) 

routes.patch('/todos/:_id', celebrate({
    /* Validação feita pelo celebrate, para verificar se o id foi enviado na requisição */
    [Segments.PARAMS]: Joi.object().keys({
        _id: Joi.string().required(),
    }),
    /* Valida se foram enviados um dos dois campos, para ser uma alteração parcial na entidade */
    [Segments.BODY]: Joi.object().keys({
        description: Joi.string().min(3),
        completed: Joi.boolean()
    })
}), TodoController.modify)

routes.put('/todos/:_id', celebrate({
    /* Validação feita pelo celebrate, para verificar se o id foi enviado na requisição */
    [Segments.PARAMS]: Joi.object().keys({
        _id: Joi.string().required(),
    }),
    /* Valida se foram enviados os dois campos, para ser uma alteração completa na entidade */
    [Segments.BODY]: Joi.object().keys({
        description: Joi.string().required().min(3),
        completed: Joi.boolean().required()
    })
}), TodoController.update)

module.exports = routes;