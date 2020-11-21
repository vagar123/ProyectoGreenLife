const mongoose = require('mongoose');

const experiencesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    description: { type: String, require: true },
    evidence: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

})

module.exports = mongoose.model('Experiences', experiencesSchema);