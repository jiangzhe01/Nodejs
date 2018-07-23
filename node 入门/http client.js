const http=require("http");

const options={
    hostname:"www.baidu.com",
    port:80,
    path:"/",
    method:"GET"
}
var request=http.request(options,(res)=>{
   console.log(res.statusCode);
   console.log()
    res.setEncoding("utf-8");
    res.on("data",function(chunk){
        console.log(chunk)
    })
})
request.end();