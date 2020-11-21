const mongoose = require('mongoose')

const donationSchema = new mongoose.Schema({
    entity: { type: String },
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: { type: String },
    value: { type: Number, required: true },
    paymentSupport: { type: String, required: true }
})

module.exports = mongoose.model('Donation', donationSchema)