const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        city: { type: String, required: true},
        cellPhone: { type: String, required: true, unique: true },
        userName: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, required: true },
        /* status: { type: Boolean, required: true }, */
    }
)

module.exports = mongoose.model('User', userSchema)