const express = require("express");
const app = express();
const saltround = 10;
const dbconnection =require('./config/dbconnection');
const dotenv = require("dotenv")

dotenv.config({path:'./config/config.env'})

dbconnection();

app.use(express.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/",(req,res)=>{   
     
    console.log(req.body);
    

//const newPost = new post({
    //username:req.body.username,
    //email:req.body.email,
    //password: req.body.password
//});
//newPost.save();

  res.redirect("https://suhaima4.github.io/module3/");

});


app.listen(process.env.PORT, (req,res)=>{
    console.log(`server is running on port ${process.env.PORT}`);

});
