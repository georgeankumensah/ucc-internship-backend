
const Department = require('../models/departments')


const getAllDepartment = async(req,res)=>{
   try {
    const department = await Department.find({})
    res.status(201).json({department}) 
   } catch (error) {
    res.status(501).json({msg: error})
   }
}


const getSingleDepartment =async (req,res)=>{
    try {
        const {id:departmentId}=  req.params
        const department = await Department.findOne({_id: departmentId})      
        
        //check if the return message is null
        if(!department){
            return res.status(404).json({msg: `no task found with the id: ${departmentId}`})  
        }
        res.status(201).json({department})
    } catch (error) {
        res.status(501).json({msg: error})
    }

}


const createDepartment = async(req,res)=>{
    try {
        const department = await Department.create(req.body)
        res.status(201).json({department})   
    } catch (error) {
      res.status(501).json({msg: error})  
    }
   
}


const updateDepartment = async(req,res)=>{
    try {
        const {id:departmentId}=  req.params
        const department = await Department.findOneAndUpdate({_id: departmentId},req.body,{ new: true, runValidators: true})      
        
        //check if the return message is null
        if(!department){
            return res.status(404).json({msg: `no task found with the id: ${departmentId}`})  
        }
        res.status(201).json({department})
    } catch (error) {
        res.status(501).json({msg: error})
    }
}


const deleteDepartment =async (req,res)=>{
    try {
        const {id:departmentId}=  req.params
        const department = await Department.findOneAndDelete({_id: departmentId})      
        
        //check if the return message is null
        if(!department){
            return res.status(404).json({msg: `no task found with the id: ${departmentId}`})  
        }
        res.status(201).json({department})
    } catch (error) {
        res.status(501).json({msg: error})
    }
}


module.exports={
    getAllDepartment,getSingleDepartment,createDepartment,updateDepartment,deleteDepartment
}