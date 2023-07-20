const express = require('express')
const departmentRouter = express.Router();
const { getAllDepartment,getSingleDepartment,createDepartment,updateDepartment,deleteDepartment}= require('../controllers/departments')


departmentRouter.route('/').get(getAllDepartment).post(createDepartment)
departmentRouter.route('/:id').get(getSingleDepartment).patch(updateDepartment).delete(deleteDepartment)

module.exports=departmentRouter;