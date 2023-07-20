const mongoose=require('mongoose')
const DepartmentSchema = new mongoose.Schema({
name:{type: String, required: [true,'department name cannot be null'], trim: true},
info:{
    vacancies:{type: Number, default: 0},
    activities:{type: String, minlength:[20,'activities should exceed 20 characters']},
    tools:[{type: String}],
    requirements:String
}

})
module.exports = mongoose.model('Department',DepartmentSchema)