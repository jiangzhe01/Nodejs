const fs=require("fs");
const buf=new Buffer(1024);

fs.open("txt.txt","r+",function(err,fd){
    if(err){
        console.log(err);
    }
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
      if(err){
          console.log(err)
      }
      if(bytes>0){
          console.log(buf.slice(0,bytes).toString())
      }
    })
})//年后