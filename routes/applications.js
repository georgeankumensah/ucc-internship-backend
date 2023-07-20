const express = require('express')
const applicationsRouter = express.Router();
const { getAllApplications,getSingleApplication,createApplication,updateApplication,deleteApplication}= require('../controllers/applications')


applicationsRouter.route('/').get(getAllApplications).post(createApplication)
applicationsRouter.route('/:id').get(getSingleApplication).patch(updateApplication).delete(deleteApplication)

module.exports=applicationsRouter;