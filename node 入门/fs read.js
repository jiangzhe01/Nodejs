const fs=require("fs");

var data =fs.readFileSync("txt.txt","utf-8");
console.log(data)
fs.readFile("txt.txt","utf-8",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data)
    }
})