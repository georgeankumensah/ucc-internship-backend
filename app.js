const express = require('express')
const app = express()
const port = process.env || 3000;
const connectionDB = require('./db/connection')

const dotenv = require('dotenv').config()


const departments = require('./routes/departments')
const users = require('./routes/users')
const applications = require('./routes/applications')

//middlewares
app.use(express.json())


//routes
app.use('/departments',departments)
app.use('/users',users)
app.use('/applications',applications)


// start server
const startServer = async ()=>{
    try {
        await connectionDB(process.env.MONGO_URI);
        app.listen(port,()=>{console.log('listening on the server')});
    } catch (error) {
        console.log(`Error connecting to database: ${error}`)
    }
}
startServer();