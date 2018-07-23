const fs=require("fs");
const buf=new Buffer(1024);

const message="hello world, i am coming";

//读取文件同步操作

    // var data = fs.readFileSync("./log.txt");
    // console.log(data.toString());


// 读取文件异步操作
// fs.readFile("./log.txt",function(err,data){
//     if(err){
//         console.error(err)
//     }
//     console.log(data.toString());
// })

// 文件写入同步操作
// fs.writeFileSync("./out.txt",message,{flag:"a+"});

// // 文件写入异步操作
// fs.writeFile("./log.txt",message,{flag:"a+"},function (err) {
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log("ok");
//     }
//
// })

// 获得文件信息
// fs.stat("./log.txt",function(err,stat){
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log("是否为文件："+stat.isFile());
//         console.log("是否为文件夹"+stat.isDirectory())
//         if(stat.isFile()==true){
//             console.log("文件大小："+stat.size);
//             console.log("文件创建时间："+stat.birthtime);
//             console.log("文件修改时间："+stat.mtime);
//         }
//     }
// })
// fs.open("./log.txt","r+",function(err,fd){
//     if(err){
//         console.error(err);
//     }
//     else{
//         fs.read(fd,buf,0,buf.length,0,function(err,bytes){
//             if(err){
//                 console.error(err);
//             }
//             console.log("字节数："+bytes);
//             if(bytes>0){
//                 console.log(buf.slice(0,bytes).toString());
//             }
//         })
//     }
// })

var fd=fs.openSync("./log.txt","r+");
var data=fs.readFileSync(fd);
console.log(data.toString())