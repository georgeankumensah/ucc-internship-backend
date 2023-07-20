
const User = require('../models/users')


const getAllUsers = async(req,res)=>{
   try {
    const user = await User.find({})
    res.status(201).json({user}) 
   } catch (error) {
    res.status(501).json({msg: error})
   }
}


const getSingleUser =async (req,res)=>{
    try {
        const {id:userId}=  req.params
        const user = await User.findOne({_id: userId}).populate('department')      
        
        //check if the return message is null
        if(!user){
            return res.status(404).json({msg: `no task found with the id: ${userId}`})  
        }
        res.status(201).json({user})
    } catch (error) {
        res.status(501).json({msg: error})
    }

}


const createUser = async(req,res)=>{
    try {
        const user = await User.create(req.body)
        res.status(201).json({user})   
    } catch (error) {
      res.status(501).json({msg: error})  
    }
   
}


const updateUser = async(req,res)=>{
    try {
        const {id:userId}=  req.params
        const user = await User.findOneAndUpdate({_id:userId},req.body,{ new: true, runValidators: true})      
        
        //check if the return message is null
        if(!user){
            return res.status(404).json({msg: `no task found with the id: ${userId}`})  
        }
        res.status(201).json({user})
    } catch (error) {
        res.status(501).json({msg: error})
    }
}


const deleteUser =async (req,res)=>{
    try {
        const {id:userId}=  req.params
        const user = await User.findOneAndDelete({_id: userId})      
        
        //check if the return message is null
        if(!user){
            return res.status(404).json({msg: `no task found with the id: ${userId}`})  
        }
        res.status(201).json({user})
    } catch (error) {
        res.status(501).json({msg: error})
    }
}


module.exports={
    getAllUsers,getSingleUser,createUser,updateUser,deleteUser
}