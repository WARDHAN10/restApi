const express = require('express')
const mongoose =require('mongoose')
const app = express()
const bodyP = require('body-parser');
require('dotenv').config()


app.use(bodyP.json())
//routes
const routes = require('./routes/post')

app.use('/post',routes)
//app.use('/specific',routes)
app.get('/',(req,res)=>{
    
    res.send("we are on Home")

})


//CONNECT TO DB 
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true , useUnifiedTopology:true}).then(() => {
        console.log("DB connected");


    })
    

//listen
const port = process.env.PORT || 8080;
app.listen(port,() => {console.log("port is working")});