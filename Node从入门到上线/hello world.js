const http=require("http");
const hostname="localhost";
const port=3001;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain");
    res.write("hello world");
    res.end();
});
// server.listen(hostname,port,()=>{
//     console.log("服务器运行在http://${hostname}:${post}/");
// });
// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });
//
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});