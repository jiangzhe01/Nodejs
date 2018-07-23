const http=require("http");
const fs=require("fs");

const hostname="localhost";
const port=3000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/palin");
    if(req.url!=="/favicon.ico"){
        const out=fs.createWriteStream("./demo.txt");
        out.write(`请求的方法：${req.method}`);
        out.write(`请求的url：${req.url}`);
        out.write(`请求的http版本：${req.httpVersion}`);
    }
    res.end("hello world");
});

server.listen(port,hostname,()=>{
    console.log(`服务器运行在 http://${hostname}:${port}`);
})