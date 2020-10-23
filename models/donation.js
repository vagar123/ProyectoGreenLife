const mongoose = require('mongoose')

const donationSchema = new mongoose.Schema({
    entity: {type: String},
    project: {type: String},
    donor: {type: String, required: true},
    description: {type: String},
    value: {type: Number, required: true},
    paymentSupport:{type: String, required: true}
})

module.exports = mongoose.model('Donation', donationSchema)