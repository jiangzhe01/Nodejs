var fs=require("fs");
var zlib=require("zlib");
var data="";
var readerStream=fs.createReadStream("./demo.txt");
readerStream.setEncoding("utf8");
readerStream.on("data",function(chunk){
    data+=chunk;
})
readerStream.on("end",function(){
    console.log(data)
})
readerStream.on("error",function(err){
    console.log(err.stack);
})
console.log(data);
console.log("程序执行完毕");
var fs=require("fs");
var data="hello world!fqwerqwerq";
var writeStream=fs.createWriteStream("./demo1.txt.zip");

writeStream.write(data,"utf8");

writeStream.on("finish",function(){
    console.log("写入完成");
})
writeStream.on("error",function(err){
    console.log(err.stack);
})
readerStream.pipe(zlib.createGzip()).pipe(writeStream);
