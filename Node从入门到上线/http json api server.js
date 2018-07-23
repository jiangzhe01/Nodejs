const http=require("http");
const url=require("url");

const hostname="localhost";
const port=3000;

function parsetime(time){
    return {
        hour:time.getHours(),
        minute:time.getMinutes(),
        second:time.getSeconds()
    }
}

function unixtime(time){
    return {unixtime:time.getTime()}
}

const server= http.createServer((req,res)=>{
    let parseUrl=url.parse(req.url,true);
    let time=new Date(parseUrl.query.iso);
    let result;
    if(req.url=="/"){
        result=parsetime(new Date());
    }
    else if(/^\/api\/parsetime/.test(req.url)){
        result=parsetime(time);
    }
    else if(/^\/api\/unixtime/.test(req.url)){
        result=unixtime(time);
    }

    if(result){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(result))

    }else{
        res.writeHead(404);
        res.end();
    }
})
server.listen(port,hostname,()=>{
    console.log(`服务器运行在 http://${hostname}:${port}`)
})