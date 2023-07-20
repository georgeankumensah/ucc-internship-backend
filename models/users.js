const mongoose=require('mongoose')
require('./departments')
const UserSchema = new mongoose.Schema({
 name:{
    firstname:{type:String,required:true, trim:true, maxlength:[20,'your firstname should not exceed 20 characters']},
    lastname:{type:String,required:true, trim:true,maxlength:[20,'your last should not exceed 20 characters']}
 },
 email:{type: String, required: true, trim: true,match: [/.+\@.+\..+/, 'Please fill a valid email address'],unique:true},
 indexnumber:{type: String, required: true, trim: true,minlength:5, unique: true},
 password:{required: true, type:String,trim: true},
 role: {type:String, default:'student'},
 skill:[{type:String, default:''}],
 
 department:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'Department'
 }

})
module.exports = mongoose.model('User',UserSchema)