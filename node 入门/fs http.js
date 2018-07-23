const http=require("http");
const url=require("url");
const path=require("path");
const fs=require("fs");
const mime=require("mime");

const hostname="localhost";
const port=3000;

const server=http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return;
    }else{
        let pathname=path.join("../",url.parse(req.url).pathname);
        pathname=decodeURIComponent(pathname);
        if(fs.statSync(pathname).isDirectory()){
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            fs.readdir(pathname,(err,files)=>{
                res.write("<ul>");
                    files.forEach((item)=>{
                        let link=path.join(url.parse(req.url).pathname,item);

                        res.write(`<li><a href="${link}">${item}</a></li>`);
                    })
                    res.end("</ul>");

            })
        }else{
            fs.readFile(pathname,"binary",(err,data)=>{
                if(err){
                    res.writeHead(500,{"Content-Type":"text/plain;charset=utf-8"});
                    res.write(JSON.stringify(err))
                    res.end();
                }else{
                    res.writeHead(200,{"Content-Type":`text/${mime.getType(pathname)};charset=utf-8`});
                    res.write(data,"binary");
                    res.end();
                }
            })
        }
    }
})
server.listen(port,hostname,()=>{
    console.log(`http://${hostname}:${port}`)
})