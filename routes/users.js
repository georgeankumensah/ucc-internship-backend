const express = require('express')
const usersRouter = express.Router();
const { getAllUsers,getSingleUser,createUser,updateUser,deleteUser}= require('../controllers/users')


usersRouter.route('/').get(getAllUsers).post(createUser)
usersRouter.route('/:id').get(getSingleUser).patch(updateUser).delete(deleteUser)

module.exports=usersRouter;