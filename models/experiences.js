const mongoose = require('mongoose');

const experiencesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, require: true },
    evidence: { type: String },
    project: { type: String, required: true }
})

module.exports = mongoose.model('Experiences', experiencesSchema);