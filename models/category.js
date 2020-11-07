//nuevo modelo de categoria de proyecto
const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
    }
)

module.exports = mongoose.model('Category', categorySchema)