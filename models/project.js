const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    name:       {type: String, required:true},
    theme:      {type: String, required:true},
    description:{type: String, required:true},
    city:       {type: String, required:true},
    address:    {type: String, required:true},
    startDate:  {type: Date,   required:true},
    endDate:    {type: Date,   required:true},
    limitPeople:{type: Boolean,required:true},
    totalPeople:{type: Number, required:true},
    status: {type: Boolean, required: true},
})
module.exports = mongoose.model('Project',projectSchema)