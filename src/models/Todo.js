const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    description: {type: String, required: 'yes'},
    completed: Boolean,
},{
    timestamps: true
}

);


module.exports = mongoose.model('ToDo', TodoSchema)

