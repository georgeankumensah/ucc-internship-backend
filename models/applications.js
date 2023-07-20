const mongoose=require('mongoose')
require('./users')
require('./departments')
const ApplicationSchema = new mongoose.Schema({
student:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
},
department:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Department'
},
status:{type:String, maxlength:10, default:'pending'},
duration:Number

})
module.exports = mongoose.model('Application',ApplicationSchema)