const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    description: {type: String, required: 'yes'},
    completed: Boolean,
    //createdAt: { type: Date, default: Date.now},
    //updatedAt: {type: Date, default: Date.now},
},{
    timestamps: true
}

);


module.exports = mongoose.model('ToDo', TodoSchema)

