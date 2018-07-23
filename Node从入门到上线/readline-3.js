const http=require("http");
const readline=require("readline");
const cheerio=require("cheerio");

const cl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:"search>>>",
})

cl.prompt();

cl.on("line",function(line){
    console.log("正在搜索"+line);
    search(line.trim(),function(){
        cl.prompt();
    })

}).on("close",function(){
    console.log("再见");
    process.exit(0);
})

function search(words,callback=null){
    let options={
        hostname:"www.baidu.com",
        port:80,
        path:`/s?wd=${encodeURIComponent(words)}`,
        method:"GET"
    }
    
    const req=http.request(options,(res)=>{
    res.setEncoding("utf8");
    let body="";
    res.on("data",(chunk)=>{
    body+=chunk;
    })
    res.on("end",()=>{
        let $=cheerio.load(body);
        $(".t a").each(function(i,el){
            console.log($(this).text(),$(this).attr("href"),"\n");
        })
    callback&&callback();
    })
})
    req.end()
}