var express=require("express");
var app=express();

app.get("/",function(req,res){
    console.log("主页GET请求")
    res.send("Hello Get")
})
app.post("/",function(req,res){
    console.log("主页Post请求")
    res.send("Hello Post")
})
app.delete("/del_user",function(req,res){
    console.log("/del_user响应Delet请求")
    res.send("删除页面")
})
app.get("/list_user",function(req,res){
    console.log("/list_user Get请求")
    res.send("用户列表页面")
})
const server=app.listen(8081,function(){
    var hostname="localhost";
    var port=server.address().port;
    console.log("程序运行在 http://%s:%s",hostname,port)
})