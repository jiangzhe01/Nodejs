const fs=require("fs");
const buf=new Buffer(1024);
fs.open("log.txt","r+",function(err,fd){
    if(err){
        console.log(err.stack);
    }
    console.log("文件打开成功！");
    fs.writeFile("log.txt","hello,world",{flag:"a+"},(err)=>{
        if(err)
            console.error(err);
        console.log("写入成功！");
    })
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.error(err)
        }
        console.log("字节数被读取："+bytes);
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString())
        }
    })
})