const express=require("express");
const app=express();

const hostname="localhost";
const port = 3000;

app.use(express.static("public"))

app.get("/",function(req,res){
    // console.log("Hello world!");
    res.send("Hello world!")
})
app.get("/index.html",function(req,res){
    res.sendFile(__dirname+"/"+"index.html");
    console.log(__dirname)
})
app.get("/process_get",function(req,res){
    response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
const server=app.listen(port,function(){
    console.log("程序运行在 http://%s:%s",hostname,port);
})