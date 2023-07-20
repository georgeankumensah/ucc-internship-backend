
const { application } = require('express')
const Application = require('../models/applications')


const getAllApplications = async(req,res)=>{
   try {
    const application = await Application.find({})
    res.status(201).json({application}) 
   } catch (error) {
    res.status(501).json({msg: error})
   }
}


const getSingleApplication =async (req,res)=>{
    try {
        const {id:applicationId}=  req.params
        const application = await Application.findOne({_id: applicationId}).populate('student','name').populate('department','name')     
        
        //check if the return message is null
        if(!application){
            return res.status(404).json({msg: `no task found with the id: ${applicationId}`})  
        }
        res.status(201).json({application})
    } catch (error) {
        res.status(501).json({msg: error})
    }

}


const createApplication = async(req,res)=>{
    try {
        const application = await Application.create(req.body)
        res.status(201).json({application})   
    } catch (error) {
      res.status(501).json({msg: error})  
    }
   
}


const updateApplication = async(req,res)=>{
    try {
        const {id:applicationId}=  req.params
        const application = await Application.findOneAndUpdate({_id:applicationId},req.body,{ new: true, runValidators: true})      
        
        //check if the return message is null
        if(!application){
            return res.status(404).json({msg: `no task found with the id: ${applicationId}`})  
        }
        res.status(201).json({application})
    } catch (error) {
        res.status(501).json({msg: error})
    }
}


const deleteApplication =async (req,res)=>{
    try {
        const {id:applicationId}=  req.params
        const application = await Application.findOneAndDelete({_id: applicationId})      
        
        //check if the return message is null
        if(!application){
            return res.status(404).json({msg: `no task found with the id: ${application}`})  
        }
        res.status(201).json({application})
    } catch (error) {
        res.status(501).json({msg: error})
    }
}


module.exports={
    getAllApplications,getSingleApplication,createApplication,updateApplication,deleteApplication
}