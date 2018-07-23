const fs=require("fs");
const path=require("path");

function travel(dir,callback){
    fs.readdirSync(dir).forEach(function(file){
        let pathname=path.join(dir,file);
        if(fs.statSync(pathname).isDirectory()){
            travel(pathname,callback)
        }else{
            console.log(pathname)
        }
    })
}

travel(__dirname,function(pathname){
    console.log(pathname)
})