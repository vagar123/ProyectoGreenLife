const mongoose = require('mongoose')

const newslettersSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required: true},
    state: {type: String, required: true}
})

module.exports = mongoose.model('Newsletters', newslettersSchema)