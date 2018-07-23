const express=require("express");
var app=express();

const hostname="localhost";
const port = 3000;

app.use(express.static("public"));
app.get("/",function(req,res){
    res.send("Hello world!");
})
var server=app.listen(port,function(){
    console.log("程序运行在 http://%s:%s",hostname,port);
})