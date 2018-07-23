const fs=require("fs");
// 阻塞代码实例
var data=fs.readFileSync("./demo.txt");
console.log(data.toString());
// 非阻塞代码实例
fs.readFile("./demo.txt",function(err,data){
    if(err){
        console.error(err);
    }
    else{
        console.log(typeof data)
        console.log(data.toString())
    }
})