const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const userRouter = require('./routes/userRoutes')

const app = express()

app.use(express.json())

//connection to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server connected to Database and Running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})


//middleware
app.use('/api/user',userRouter)

