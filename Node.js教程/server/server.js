const http=require("http");
const url=require("url");

const hostname="localhost";
const port=3000;

function start(route) {
    function onRequest(req,res){
        var pathname=url.parse(req.url).query;
        route(pathname);
        res.writeHead(200,{"Content-Type":"text/palin"})
        res.end("hello world");
    }
    http.createServer(onRequest).listen(port, hostname, ()=> {
        console.log(`服务器运行在 http://${hostname}:${port}`);
});

}

exports.start=start;